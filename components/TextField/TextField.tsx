import { HTMLInputTypeAttribute } from "react";

type TextFieldProps = {
  value?: string | number;
  label?: string;
  id?: string;
  name: string;
  placeholder?: string;
  type?: Extract<HTMLInputTypeAttribute, "text" | "email">;
};

export const TextField = ({
  name,
  label,
  placeholder,
  value,
  type = "text",
  id,
}: TextFieldProps) => {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        id={id}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </>
  );
};
