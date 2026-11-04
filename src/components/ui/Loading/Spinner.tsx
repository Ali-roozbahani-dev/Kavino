import { ImSpinner3 } from "react-icons/im";


export default function Spinner({className}: {className?: string}){

    return (
        <ImSpinner3 className={`animate-spin text-theme-2 ${className}`}/>        
    )
}