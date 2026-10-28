

export default function ReviewContent({comment}: {comment: string}){

    return (
        <p className="lg:px-4 pt-4 text-primary-text
        text-[13px] lg:text-[14px]">{comment}</p>        
    )
}