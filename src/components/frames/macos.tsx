import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MacosFrameProps = {
  children: ReactNode;
  className?: string;
};
const MacosFrame = ({ children, className }: MacosFrameProps) => {
  return (
    <div className={twMerge("rounded-md overflow-hidden", className)}>
      <div className="px-3 py-2 flex items-center gap-2 bg-gray-700">
        <span className="size-3 block bg-gray-500 rounded-full"></span>
        <span className="size-3 block bg-gray-500 rounded-full"></span>
        <span className="size-3 block bg-gray-500 rounded-full"></span>
      </div>
      {children}
    </div>
  );
};

export { MacosFrame };
