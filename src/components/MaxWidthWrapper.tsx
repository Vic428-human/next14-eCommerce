import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // shadcn

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-6 h-2 bg-blue-400", className)}>{children}</div>;
};

export default MaxWidthWrapper;
