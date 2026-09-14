

export function getCookie(name: string) {
    if (typeof document === "undefined") return undefined;

    const cookies = document.cookie.split("; ");

    const cookie = cookies.find((row) =>
        row.startsWith(`${name}=`)
    );

    return cookie
        ? decodeURIComponent(cookie.substring(name.length + 1))
        : undefined;
}