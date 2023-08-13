import React, { useState } from "react"

function App() {

  const [count, setCount] = useState(0)
  const onClickAdd = () => {
    setCount(count + 2);
  }
  const onClickDec = () => {
    setCount(count - 2);
  }
  const onClickReset = () => {
    setCount(0);
  }

  const [text, setText] = useState('');
  const onChangeText = (event) => {
    setText(event.target.value);
  }
  const [textList, setTextList] = useState([]);
  const onClickTextButton = () => {
    const newTextList = [...textList, text];
    setTextList(newTextList);
    setText('');
  }
  const onClickTextReset = () => {
    setTextList([]);
  }

  return (
    <div>
      <div>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickDec}>-</button>
        {/* リセットするボタン */}
        <button onClick={onClickReset}>Reset</button>
        <p>{count}</p>
      </div>
      <div>
        <input onChange={onChangeText} value={text}></input>
        <button onClick={onClickTextButton}>Add List</button>
        <button onClick={onClickTextReset}>Reset Text</button>
        <ul>
          {textList.map((elem, idx) => {
            return <li key={idx}>{`${idx}: ${elem}`}</li>
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
