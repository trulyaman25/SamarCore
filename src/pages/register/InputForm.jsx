import React from "react";

const InputForm = ({ ques, value, setValue, enabled = false }) => {
  return (
    <div className="my-2 text-gray-200">
      <h3>{ques}</h3>
      <input
        type="text"
        value={value || ""}
        placeholder="Team Name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full p-2 border border-gray-300 rounded-lg"
        required={true}
        disabled={!enabled}
      />
    </div>
  );
};

export default InputForm;
