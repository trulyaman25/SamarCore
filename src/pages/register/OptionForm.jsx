import React from "react";

const OptionForm = ({ques, options, value, setValue, enabled=false }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col text-gray-200">
      <h3>{ques}</h3>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={ques}
            value={option}
            checked={value === option}
            onChange={handleChange}
            disabled={!enabled}
            required
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default OptionForm;
