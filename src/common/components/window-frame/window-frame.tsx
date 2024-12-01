import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { MacOSWindowControls } from "./controls/macos";
import { DefaultWindowControls } from "./controls/default";
import { WindowsWindowControls } from "./controls/windows";

type WindowFrameVariant = "macos" | "windows" | "default";
type WindowFrameProps = PropsWithChildren<{
  variant: WindowFrameVariant;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  background?: string;
}>;
const WindowFrame = ({
  children,
  variant = "default",
  className,
  rounded,
  shadow,
  background = "transparent",
}: WindowFrameProps) => {
  return (
    <div
      className={twMerge(
        "overflow-hidden",
        rounded && "rounded-xl",
        shadow && "shadow-editor",
        className,
      )}
      style={{
        background,
      }}
    >
      {variant === "default" ? <DefaultWindowControls /> : null}
      {variant === "macos" ? <MacOSWindowControls /> : null}
      {variant === "windows" ? <WindowsWindowControls /> : null}
      {children}
    </div>
  );
};

export { WindowFrame };
