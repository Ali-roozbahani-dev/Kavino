import { Button } from "@/components/ui/button";

export default function SendReview({isPending}: {isPending: boolean}){

    return (
        <Button 
        disabled={isPending}
        type="submit"
        variant={"Blue1"} 
        className="rounded-sm md:px-4 text-[13px] md:text-[14px]">
            ارسال نظر
        </Button>
    )
}