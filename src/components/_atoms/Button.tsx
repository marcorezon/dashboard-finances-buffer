import { Button } from "@mui/base/Button";
import { ComponentPropsWithRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  styles?: string;
  arialabeltext: string;
  children?: ReactNode;
  bgcolor: "bg-black" | "bg-white";
  textColor?: "txwhite" | "txblack";
}

export default function ButtonComponent({
  children,
  styles,
  arialabeltext,
  bgcolor,
  textColor,
  ...rest
}: ButtonProps) {
  return (
    <Button
      className={`p-3 ${bgcolor} text-${textColor} rounded-md font-semibold ${styles}`}
      aria-label={arialabeltext}
      {...rest}
    >
      {children}
    </Button>
  );
}
