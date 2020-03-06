import React from "react";

import './styles.css';

export default function WeaponsRow(props) {
  return (
    <tr className="weapons-row">
      <td>
        <img src={props.images.icon} alt={props.name} />
        {props.name}
      </td>
      <td>{props.rarity}</td>
      <td>{props.mainStats.DmgPB * props.mainStats.ReloadTime}</td>
      <td>{props.mainStats.DmgPB}</td>
    </tr>
  );
}
