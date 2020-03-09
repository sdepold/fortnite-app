import React from "react";
import data from "./fixture.json";
import WeaponsRow from "../WeaponsRow";
import SearchForm from "../SearchForm";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "*",
      data
    };
  }

  render() {
    return (
      <div>
        <h2>Weapons</h2>
        <SearchForm />
        <table>
          <thead>
            <th>Weapon</th>
            <th>Rarity</th>
            <th>DPS</th>
            <th>Damage</th>
          </thead>
          <tbody>
            {this.state.data.weapons.map((data, i) => (
              <WeaponsRow key={i} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
