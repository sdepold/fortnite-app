import React from "react";

import SearchForm from "./components/SearchForm";
import WeaponsTable from "./components/WeaponsTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <WeaponsTable />
    </div>
  );
}

export default App;
