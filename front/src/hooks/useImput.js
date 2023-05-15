const { React, useState } = require("react");

const useImput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { onchange: onChange, value: value };
};

export default useImput;
