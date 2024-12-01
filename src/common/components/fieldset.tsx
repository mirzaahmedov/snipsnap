import type { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FieldsetProps = PropsWithChildren & {
  legend?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};
const Fieldset = ({ children, legend, containerProps }: FieldsetProps) => {
  return (
    <fieldset>
      {legend ? (
        <legend className="text-xs font-black mb-2.5">{legend}</legend>
      ) : null}
      <div
        {...containerProps}
        className={twMerge(
          "grid grid-cols-2 gap-2.5",
          containerProps?.className,
        )}
      >
        {children}
      </div>
    </fieldset>
  );
};

export { Fieldset };
