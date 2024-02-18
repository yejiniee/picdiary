interface Props {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  labelName: string;
  htmlFor: string;
}

export default function InputField({
  id,
  name,
  type,
  placeholder,
  value,
  labelName,
  htmlFor,
}: Props) {
  return (
    <>
      <label className="" htmlFor={htmlFor}>
        {labelName}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required
      ></input>
    </>
  );
}
