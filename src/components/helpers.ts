import { IBreadcrumbItem, IItem, NavItems } from "./model";

export const navItems: NavItems[] = [
  {
    label: "All products",
    href: "/products",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

export const getSubString = (text: string, subNumber: number): string => {
  return text?.length > subNumber ? `${text.substring(0, subNumber)}...` : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
