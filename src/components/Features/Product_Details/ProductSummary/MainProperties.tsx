import { FaCircle } from "react-icons/fa";
import { ProductAttribute } from "../../../../entities/Product/types";

interface Props {
  attributes: ProductAttribute[];
  highlight_attributes: ProductAttribute[];
}
export default function MainProperties({ attributes , highlight_attributes}: Props) {
  const mainProperties = 
  highlight_attributes.length > 0 
  ?  highlight_attributes.slice(0, 5)
  :  attributes.slice(0, 5);

  return (
    <ul className="mt-4">
      {mainProperties.map((propertie, i) => (
        <li key={i} className="mb-3 text-[14px] lg:text-[15px]">
          <FaCircle className="inline-block me-2 text-[5px] lg:text-[6px] text-theme-hover" />
          <span className="me-1 text-[13px] md:text-[14px] text-primary-text">
            {propertie.attribute} :
          </span>
          <span className="text-[13px] md:text-[14px] font-semibold">
            {propertie.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
