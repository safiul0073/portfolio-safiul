import React from 'react'

interface Props {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password',
    placeholder?: string,
    value?: string,
    setValue: (value: any) => void,
}

const InputGroup = ({label, name, type, placeholder, value, setValue}: Props) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue((prev: any) => ({...prev, [name]: e.target.value}))}
      />
    </div>
  )
}

export default InputGroup