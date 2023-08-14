import React, { useState, useEffect } from "react"
import { Card } from "./components/Card";

function App() {

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'start',
    margin: '8px',
  }

  const [dataList, setDataList] = useState([]);

  const dataFetcher = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await res.json();
    console.log(json);
    setDataList(json);
  }

  useEffect(() => {
    dataFetcher()
  }, [])

  return ( 
    dataList.length === 0 ? 
    <div>
      <p>データ取得中</p>
    </div> :
    <div>
      <div className="CardContainer" style={cardContainerStyle}>
        {dataList.map((elem, idx) => {
          return (
            <Card
             key={idx}
             title={elem.title}
             image={elem.thumbnailUrl}
             imageUrl={elem.url} // 大きな画像のURLをpropsで渡す
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
