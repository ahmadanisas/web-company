import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, className }) => {
  return (
    <section className="w-full from-[#f0efea] to-blue-200 dark:from-[#000815] dark:to-blue-800 bg-gradient-to-b pt-20 relative mb-16">
      
      <section
        className={cn("max-w-6xl mx-auto w-full pt-16 font-inter", className)}
      >
        {children}
      </section>
    </section>
  );
};

export default PageHeader;
