import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  type: string;
  registerName: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  labelName: string;
  validator: any;
  errorMessage: string;
}

export default function InputField({
  type,
  registerName,
  register,
  placeholder,
  labelName,
  validator,
  errorMessage,
}: Props) {
  return (
    <>
      <label className="" htmlFor={registerName}>
        {labelName}
      </label>
      <input
        id={registerName}
        type={type}
        placeholder={placeholder}
        {...register(registerName, validator)}
      ></input>
      {errorMessage && <span id="err-msg">{errorMessage}</span>}
    </>
  );
}
