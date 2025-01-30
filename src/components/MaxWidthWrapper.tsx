import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // shadcn

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-x1 px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
