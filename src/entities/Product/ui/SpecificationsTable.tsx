"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ProductAttribute, ProductVariant } from "../types";

interface Props {
  attributes: ProductAttribute[];
}

export default function SpecificationsTable({ attributes }: Props) {
  return (
    <div className="overflow-hidden bg-background mt-4">
      <Table>
        <TableBody>
          {attributes.map((attribute, i) => (
            <TableRow key={i} className="border-0">
              <TableCell className="w-1/3 bg-muted/40 px-0.75 py-0.75 font-medium text-foreground">
                <div className="bg-[#e4f1fc] py-3 px-4">
                  {attribute.attribute}
                </div>
              </TableCell>

              <TableCell className="py-0.75 px-0.75 text-muted-foreground">
                <div className="bg-[#f0f6fc] py-3 px-4">{attribute.value}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
