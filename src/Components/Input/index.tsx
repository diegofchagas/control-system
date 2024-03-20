import { ComponentProps } from "react";
import { Container } from "./style";

type InputProps = ComponentProps<"input"> & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </Container>
  );
};
