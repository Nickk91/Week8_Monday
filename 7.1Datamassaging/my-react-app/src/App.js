import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
import { useState, useEffect } from "react";

function Names({ names }) {
  return (
    <div>
      <h1>The prop names</h1>
      {data.map((obj, index) => (
        <li key={index}>{obj.name}</li>
      ))}
    </div>
  );
}

function Card({ names }) {
  return data.filter((obj) => {
    let date = new Date(obj.birthday);
    const year = date.getFullYear();
    if (year < 1990) {
      return (
        <>
          <h1>{obj.name}</h1>
          <ul>
            <li>name: {obj.name}</li>
            <li>birthday: {obj.birthday}</li>
            <li>favorite meats: {obj.favoriteFoods.meats}</li>
            <li>favorite fish: {obj.favoriteFoods.fish}</li>
          </ul>
        </>
      );
    }
  });
}

function App() {
  const [originalData, setOriginalData] = useState(data);
  const [filteredData, setFilteredData] = useState([]);
  const [namesArray, setNamesArray] = useState([]);

  useEffect(() => {
    function getNamesArray(arr) {
      return arr.map((obj) => obj.name);
    }
    function filterByYear(arr) {
      return arr.filter((obj) => {
        let date = new Date(obj.birthday);
        const year = date.getFullYear();
        return year < 1990;
      });
    }
    setNamesArray(getNamesArray(originalData));
    setFilteredData(filterByYear(originalData));
  }, [originalData]);

  return (
    <div className="App">
      <Names />
      <Card />
      <h1>Original Data</h1>
      <ul>
        {originalData.forEach((obj, index) => (
          <li key={index}>{obj.name}</li>
        ))}
      </ul>
      <h1>Names</h1>
      <ul>
        {namesArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h1>People With Birthday before 1990</h1>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
