import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roundToTwoDecimals(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function customOrder(prop: string, list: string[]) {
  const order = list.reduce(
    (obj, key, idx) => Object.assign(obj, { [key]: idx + 1 }),
    {}
  );
  const getVal = (item) => order[item[prop]] || Infinity;

  return (a, b) => getVal(a) - getVal(b);
}
