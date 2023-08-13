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

  const [text2, setText2] = useState('');
  const onChangeText2 = (event) => {
    setText2(event.target.value);
  }
  const [textList2, setTextList2] = useState([]);
  const onClickTextButton2 = () => {
    const newTextList2 = [...textList2, text2];
    setTextList2(newTextList2);
    setText2('');
  }
  const onClickTextReset2 = () => {
    setTextList2([]);
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
      <div>
        <input onChange={onChangeText2} value={text2}></input>
        <button onClick={onClickTextButton2}>Add List</button>
        <button onClick={onClickTextReset2}>Reset Text</button>
        <ul>
          {textList2.map((elem, idx) => {
            return <li key={idx}>{`${idx}: ${elem}`}</li>
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
