import { ReactNode } from "react";


export default function SectionContainer({children}: {children: ReactNode}){

    return (
        <div className="px-3">
            {children}
        </div>
    )
}