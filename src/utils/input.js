import React from "react";
import "./button.scss";

const Input = ({ title, type, name, value, onChange }) => {
  return (
    <div>
      <label>
        {title}
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default React.memo(Input);
