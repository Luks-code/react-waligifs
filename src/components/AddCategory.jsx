import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSub = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSub}>
      <input type="text" placeholder="Buscar Gif" onChange={onInputChange} />
    </form>
  );
};
