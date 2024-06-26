""
import React, { useEffect, useState } from 'react'

const ShortList = ({setValue, value}: any) => {
    const [shortList, setShortList] = useState([
        {
            value: "",
        }
    ])

    useEffect(() => {
        if (value && value.short_list) {
            setShortList(value.short_list.map((text: any) => ({value: text})))
        }
    }, [value])

    const handleChange = (onChangeValue: string, index: number) => {
        const newShortList = [...shortList];
        newShortList[index].value = onChangeValue;
        setShortList(newShortList);
        setValue({...value, short_list: newShortList.reduce((acc: any, cur: any) => [...acc, cur.value], [])});
    }
  return (
    <div className="mb-4">  
      <div className="flex justify-between items-center">
        <label className="block text-lg font-medium mb-2">Short List</label>
        <button type="button" onClick={() => setShortList([...shortList, {value: ""}])}  className="bg-indigo-500 text-white py-2 px-4 rounded-md">Add</button>
      </div>
        <div className="flex flex-col gap-4">
            {shortList?.map((text, index) => (
                <div key={index} className="flex items-center">
                    <input
                        type="text"
                        name="short_list"
                        value={text.value}
                        onChange={(e) => handleChange(e.target.value, index)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Short List"
                    />
                    <button type="button" onClick={() => setShortList(shortList.filter((_, i) => i !== index))} className="ml-2 bg-red-500 text-white py-2 px-4 rounded-md">Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShortList