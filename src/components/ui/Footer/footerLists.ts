import { IconType } from "react-icons";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export interface FooterLink {
  label: string;
  href: string;
  icon?: IconType;  
}

export type TfooterLists = {
  title: string;
  links: FooterLink[];
}
export const footerLists: TfooterLists[] = [
    {
    title: "درباره خانه کالا",
    links: [
      {
        label: "درباره ما",
        href: "/about",
      },
      {
        label: "همکاری با ما",
        href: "/careers",
      },
      {
        label: "قوانین و مقررات",
        href: "/terms",
      },
      {
        label: "حریم خصوصی",
        href: "/privacy",
      },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      {
        label: "صفحه اصلی",
        href: "/",
      },
      {
        label: "محصولات",
        href: "/products",
      },
      {
        label: "برندها",
        href: "/brands",
      },
      {
        label: "تخفیف‌ها",
        href: "/offers",
      },
      {
        label: "وبلاگ",
        href: "/blog",
      },
      {
        label: "تماس با ما",
        href: "/contact",
      },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      {
        label: "پیگیری سفارش",
        href: "/orders/tracking",
      },
      {
        label: "شرایط بازگشت کالا",
        href: "/return-policy",
      },
      {
        label: "راهنمای خرید",
        href: "/buy-guide",
      },
      {
        label: "پرسش‌های متداول",
        href: "/faq",
      },
      {
        label: "گارانتی و خدمات",
        href: "/warranty",
      },
    ],
  },  
  {
    title: "راه های ارتباطی",
    links: [
        {
            label: "021-91001000",
            href: "/",
            icon: FiPhone
        },
        {
            label: "021-91001000",
            href: "/",
            icon: HiMiniDevicePhoneMobile
        },
        {
            label: "ali.roozbahani1379@gmail.com",
            href: "/",
            icon: MdOutlineMailOutline
        },
        {
            label: "تهران , خیابان شریعتی , پلاک 23",
            href: "/",
            icon: SlLocationPin
        },
    ]
  }
];

export const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/...",
  },
  {
    icon: FaTelegramPlane,
    href: "https://t.me/...",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/989121234567",
  },
];