import { Badge } from "@/components/ui/badge";


export default function DiscountBadge(){

    return (
        <Badge className="rounded-sm h-6 text-red-600 bg-red-100">
            {"8"}% 
            تخفیف
        </Badge>
    )
}