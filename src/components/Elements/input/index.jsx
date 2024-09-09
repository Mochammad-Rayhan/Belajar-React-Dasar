import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-3">
      <Label htmlfor={name}>{label}</Label>
      <Input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
      ></Input>
    </div>
  );
});

export default InputForm;
