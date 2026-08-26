import { VariantAttribute } from "@/entities/Product/types";


export default function CartColor({attributes}: {attributes: VariantAttribute[]}){
    const color = attributes.find((item)=> item.attribute === "color");
    
    if(!color) return null;

    const colorCode = color.properties?.code;

    if(typeof colorCode !== "string") return null;

    
    return(
        <div className="flex border p-1 w-max rounded-sm">
            <span className="text-[12px] md:text-[13px]">{color.value}</span>
            <div 
            className="border rounded-sm w-5 h-5 ms-2"
            style={{
                backgroundColor: colorCode
            }}
            />
        </div>
    )
}