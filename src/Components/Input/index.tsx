import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
};
