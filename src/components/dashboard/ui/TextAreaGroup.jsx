"use client";
import React from 'react';
import { Editor } from 'primereact/editor';

const TextAreaGroup = ({label, name, type, placeholder, value, setValue}) => {

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">{label}</label>
		<Editor value={value} onTextChange={(e) => setValue((prev) => ({...prev, [name]: e.htmlValue}))} style={{ height: '320px' }} />
    </div>
  )
}

export default TextAreaGroup