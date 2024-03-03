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
    <div className="relative flex flex-col items-start w-full gap-2">
      <label className="" htmlFor={registerName}>
        {labelName}
      </label>
      <input
        className="flex py-3 px-4 justify-center items-center w-full rounded-lg"
        id={registerName}
        type={type}
        placeholder={placeholder}
        {...register(registerName, validator)}
      ></input>
      {errorMessage && (
        <span className="text-red-700" id="err-msg">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
