import Link from "next/link";


export default function EditNumLink(){

    return (
        <Link href={"/Login"} className="block rounded-sm border px-3 text-[13px] md:text-[14px] text-center py-2">
            ویرایش شماره موبایل
        </Link>
    )
}