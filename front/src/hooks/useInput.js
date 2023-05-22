const { useState } = require("react");

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { onChange, setValue, value };
};

export default useInput;
