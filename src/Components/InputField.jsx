import { useState } from "react";

const InputField = () => {
    const [value, setValue] = useState([])
    const [select, setSelect] = useState('');

    const handleSelect = (e) => {
        setValue((prev) => [...prev, e.target.value]);
        setSelect('state')
    };


    return (
        <div>
            <select value={select} onChange={handleSelect} name="" id="" className="bg-white w-1/2 p-4">
                <option value="" disabled id="placeholderOption">Select a category</option>
                {
                    value.length && <option value="state">{value.map((item, idx) => <span
                        key={idx}
                        className="border-1 border-red-500 bg-gray-500">{item}</span>
                    )}</option>
                }
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
                <option value="Option3">Option 3</option>
                <option value="Option4">Option 4</option>
            </select>
        </div>
    );
};

export default InputField;