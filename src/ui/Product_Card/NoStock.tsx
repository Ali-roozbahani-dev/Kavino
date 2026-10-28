import { PackageX } from "lucide-react";

export default function NoStock(){

    return (
        <div className="absolute z-5 flex-center top-0 right-0 w-full h-full">
            <div className="rounded-md px-5 py-3 text-white bg-[rgba(0,0,0,0.5)] text-center">
                <PackageX className="mx-auto mb-1"/>
                <h2>اتمام موجودی</h2>
            </div>
        </div>
    )
}