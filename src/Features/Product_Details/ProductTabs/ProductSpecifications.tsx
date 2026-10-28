import { ClipboardList } from "lucide-react";
import styles from "../styles/ProductTabs.module.css";
import SpecificationsTable from "../ui/SpecificationsTable";
import { ProductAttribute } from "@/entities/Product";

interface Props {
  attributes: ProductAttribute[];
}

export default function ProductSpecifications({ attributes }: Props) {
  return (
    <div>
      <div className={styles.tabTitle}>
        <ClipboardList className="size-5 md:size-6.5 me-2" />
        <h1>مشخصات محصول</h1>
      </div>

      <SpecificationsTable attributes={attributes} />
    </div>
  );
}
