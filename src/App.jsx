import { useEffect, useState } from "react";

import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
    .then(data=>setWatches(data))
  },[])


  // const watches = [
  //   {
  //     "Id": 1,
  //     "name": "Apple Watch Series 7",
  //     "price": "$399"
  //   },
    
  //   {
  //     "Id": 2,
  //     "name": "Samsung Galaxy Watch 4" ,
  //     "price": "$249"
  //   },
  //   {
  //     "Id": 5,
  //     "name": "Huawei Watch GT 3",
  //     "price": "$299"
  //   },
    
  // ];

  return (
    <>
      <h1>Watch Details</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  );
}

export default App;
