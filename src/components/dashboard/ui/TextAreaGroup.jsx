"use client";
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const TextAreaGroup = ({label, name, type, placeholder, value, setValue}) => {
    const editor = useRef(null)

	const config = useMemo(
		() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		}),
		[placeholder]
	);
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">{label}</label>
      <JoditEditor
			ref={editor}
			value={value}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setValue((prev) => ({...prev, [name]: newContent}))} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
    </div>
  )
}

export default TextAreaGroup