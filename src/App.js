import { useState, useEffect } from "react";
import Cardlist from "./components/card-list/Cardlist";
import SearchBox from "./components/search-box/SearchBoax";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchFeild, setSearchFeild] = useState("");
  const [filteredArray, setfilteredArray] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  useEffect(
    () => {
      setfilteredArray(
        monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchFeild);
        })
      );
    },
    [searchFeild,
    monsters]
  );

  const onSearchChange = (event) => {
    const searchfeildStr = event.target.value.toLocaleLowerCase();
    setSearchFeild(searchfeildStr);
  };

  return (
    <div className="App">
      <SearchBox
        Classs="seasrchbox"
        Placeholder="Search monster"
        OnChangeHandler={onSearchChange}
      />

      <Cardlist monsters={filteredArray} />
    </div>
  );
};

export default App;
