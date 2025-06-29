// import React from 'react';
import type { ChangeEvent } from "react";

interface CustomInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style: string;
  name: string;
}

function CustomInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  style,
  name,
}: CustomInputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2">{label}</label>
      <input
        type={type}
        value={value} //
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-lg p-2.5 max-h-[42px] ${style}`}
        name={name}
      />
    </div>
  );
}

export default CustomInput;
