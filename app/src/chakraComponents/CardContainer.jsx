import React, { useState, useEffect } from "react"
import { ModalCard } from "./ModalCard";
import { Box, Flex, Spinner } from "@chakra-ui/react";

export const CardContainer = () => {

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
    <Flex height='100vh' justify='center' align='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex> :
    <Box mt={4}>
      <Flex flexWrap="wrap" justify='center'>
        {dataList.map((elem, idx) => {
          return (
            <ModalCard
             key={idx}
             title={elem.title}
             image={elem.thumbnailUrl}
             imageUrl={elem.url} // 大きな画像のURLをpropsで渡す
            />
          )
        })}
      </Flex>
    </Box>
  );
}
