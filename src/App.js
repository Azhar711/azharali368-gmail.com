import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import OutlinedCard from "./utils/Card";
const axios = require("axios");

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [dataArray, setDataArray] = useState([10]);
  const [error, setError] = useState();

  function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }
  const prevBlockNumber = usePrevious(blockNumber);

  useEffect(() => {
    if (blockNumber) {
      if (blockNumber === prevBlockNumber) {
        setBlockNumber(blockNumber - 15);
      } else {
        if (dataArray && dataArray.length < 10) {
          axios
            .get(`http://localhost:9000/getdetails?blockNum=${blockNumber}`)
            .then(response => {
              setDataArray([
                ...dataArray,
                {
                  hash: response.data.id,
                  timeStamp: response.data.timestamp,
                  producer: response.data.producer,
                  num: response.data.block_num
                }
              ]);
            })
            .catch(error => {
              console.log("Error : ", error);
            });
        }
      }
    }
  }, [blockNumber, dataArray, prevBlockNumber]);

  const handleClick = () => {
    if (dataArray && dataArray.length < 10) {
      axios
        .get("https://eos.greymass.com/v1/chain/get_info")
        .then(response => {
          setBlockNumber(response.data.head_block_num);
        })
        .catch(error => {
          console.log("Here : ", error);
          setError("Error Connecting");
        });
    } else {
      setDataArray([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleClick()}>LOAD</button>
        <div style={{ margin: "50px" }}>
          {dataArray.length ? (
            dataArray.map((data, i) => {
              return data.timeStamp ? (
                <div style={{ margin: "10px" }} key={i}>
                  <OutlinedCard
                    timeStamp={data.timeStamp}
                    producer={data.producer}
                    number={data.num}
                  />
                </div>
              ) : null;
            })
          ) : (
            <div>{error}</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
