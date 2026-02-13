import React from "react";

const Input = ({
  setValue,
  title,
  formName,
  type,
}: {
  setValue: any;
  title: string;
  formName: string;
  type: string;
}) => {
  return (
    <label className="w-full group py-4">
      <span className="block text-main-col/50 group-focus-within:text-main-col transition-colors duration-300">
        {title}
      </span>

      <input
        className="w-full underline text-main-col border-main-col/50 border-b-2
               focus:border-main-col transition-all duration-300 ease-in-out outline-0"
        type={type}
        name={formName}
        onChange={setValue}
        required
      />
    </label>
  );
};

export default Input;
