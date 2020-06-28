/* eslint-disable react/prop-types */
import React from 'react';

const List = ({ title, elements }) => (
  <div className="list">
    <p>{title}</p>
    <ul>
      {elements.map(({ name, login }) => (
        <li>{name || login}</li>
      ))}
    </ul>
  </div>
);

export default List;
