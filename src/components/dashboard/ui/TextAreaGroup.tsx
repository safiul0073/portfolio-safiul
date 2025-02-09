"use client";
import React from "react";
import { Editor } from "primereact/editor";
interface propsType {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string|undefined;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}
const TextAreaGroup: React.FC<propsType> = ({
  label,
  name,
  type,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">{label}</label>
      <Editor
        value={value}
        onTextChange={(e) =>
          setValue((prev: any) => ({ ...prev, [name]: e.htmlValue }))
        }
        style={{ height: "320px" }}
      />
    </div>
  );
};

export default TextAreaGroup;
