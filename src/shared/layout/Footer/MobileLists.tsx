"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { footerLists} from "./footerLists";
import SocialMedia from "./SocialMedia";

export default function MobileLists() {
  return (
    <div className="py-4 px-3">
      <Accordion type="multiple" className="w-full">
        {footerLists.map((list, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="py-1">
            <AccordionTrigger className="text-base font-bold text-[14px] md:text-[16px]">
              {list.title}
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 pt-2 no-underline!">
                {list.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="flex py-1 items-center text-sm text-white hover:text-white"
                    >
                      {link.icon && (
                        <link.icon className="me-2 shrink-0" size={18} />
                      )}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}        
      </Accordion>

      <div className="mt-5">
        <SocialMedia />
      </div>

      
    </div>
  );
}