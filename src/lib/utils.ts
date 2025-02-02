import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// 可以推測，是對shadcn套件輸入 tailwind css classnames 的封裝
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Tailwind CSS classnames
}

// 下面這是 tailus 的範本 跟 shadcn無關
// https://ui.tailus.io/react/get-started/installation/
/**
 * Clone React element.
 * The function clones React element and adds Tailwind CSS classnames to the cloned element
 * @param element the React element to clone
 * @param classNames Tailwind CSS classnames
 * @returns { React.ReactElement } - Cloned React element
 */
// export function cloneElement(element: React.ReactElement, classNames: string) {
//   return React.cloneElement(element, {
//     className: twMerge(element.props.className, classNames),
//   });
// }
