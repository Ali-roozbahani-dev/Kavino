import axios from "axios";

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
});

// ---------- کمکی: خوندن CSRF از کوکی ----------
function getCsrfToken(): string | undefined {
    if (typeof document === "undefined") return undefined;
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1];
}

// ---------- گرفتن اولیه CSRF (فقط یک‌بار، با قابلیت retry در صورت شکست) ----------
let csrfPromise: Promise<void> | null = null;

function initCsrf() {
    if (!csrfPromise) {
        csrfPromise = axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/csrf/`, {
                withCredentials: true,
            })
            .then(() => undefined)
            .catch((err) => {
                csrfPromise = null; // اجازه بده دفعه بعد دوباره تلاش بشه
                throw err;
            });
    }
    return csrfPromise;
}

// ---------- رفرش توکن (مشترک بین همه‌ی درخواست‌های هم‌زمان) ----------
let refreshPromise: Promise<void> | null = null;

function refreshAccessToken() {
    if (!refreshPromise) {
        refreshPromise = axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
                {},
                {
                    withCredentials: true,
                    headers: { "X-CSRFToken": getCsrfToken() ?? "" },
                }
            )
            .then(() => undefined)
            .finally(() => {
                refreshPromise = null;
            });
    }
    return refreshPromise;
}

// ---------- Request Interceptor: ست کردن CSRF ----------
api.interceptors.request.use(async (config) => {
    await initCsrf();

    const csrfToken = getCsrfToken();
    if (csrfToken) {
        config.headers["X-CSRFToken"] = csrfToken;
    }

    return config;
});

// ---------- Response Interceptor: رفرش خودکار در صورت 401 ----------
api.interceptors.response.use(
    (response) => response,
    
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // فقط یک‌بار retry مجازه

            try {
                await refreshAccessToken();
                return api(originalRequest);
            } catch (refreshError) {
                // رفرش هم fail شد => کاربر واقعاً لاگین نیست                              
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);