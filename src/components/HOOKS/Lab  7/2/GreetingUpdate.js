import React, { useState } from "react";

function GreetingUpdate() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Hello: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default GreetingUpdate;
