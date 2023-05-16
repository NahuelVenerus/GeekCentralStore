const { useState } = require("react");

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { onChange, value };
};

export default useInput;
