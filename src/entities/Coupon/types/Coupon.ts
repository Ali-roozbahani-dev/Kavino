export interface Coupon {
    id: number;
    code: string;
    discount: number;
    discount_name: string;
    usage_limit: number;
    used_count: number;
    is_active: boolean;
    start_date: string;
    end_date: string;
}