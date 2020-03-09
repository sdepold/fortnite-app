import React from "react";
import data from "./fixture.json";
import WeaponsRow from "../WeaponsRow";
import SearchForm from "../SearchForm";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      data: {weapons: []}
    };
  }

  componentDidMount() {
    fetch('https://fortniteapi.io/weapons/list', {
      headers: {
        Authorization: 'c8d241ed-c8602303-c77f8a36-bf96fe1a'
      }
    }).then(res=>res.json()).then(({weapons})=>this.setState({data:{weapons}}))

  }

  handleSearchFormChange(term) {
    this.setState({ filter: term });
  }

  render() {
    const data = this.state.data.weapons.filter(weapon =>
      weapon.name.toLowerCase().includes(this.state.filter)
    );
    console.log(this.state.filter)

    return (
      <div>
        <h2>Weapons</h2>
        <SearchForm onChange={term => this.handleSearchFormChange(term)} />
        <table>
          <thead>
            <th>Weapon</th>
            <th>Rarity</th>
            <th>DPS</th>
            <th>Damage</th>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <WeaponsRow key={i} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
