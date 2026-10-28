import { TbFileDescription } from "react-icons/tb";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/Description.module.css"

export default function Description({description}: {description: string}){

    return (
        <div>
            <div className={styles.tabTitle}>
                <TbFileDescription className="size-5 md:size-7 me-2"/>                
                <h1>توضیحات</h1>
            </div>

            <div
            className={styles.description}
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
            }}
            />
        </div>        
    )
}