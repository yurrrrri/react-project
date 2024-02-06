import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing(true);
  }

  let nameField = <span className="player-name">{name}</span>;

  if (isEditing) {
    nameField = <input type="text" />;
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>Edit</button>
    </li>
  );
}
