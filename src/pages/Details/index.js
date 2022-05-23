import React from "react";

const Details = () => {
  const handleCheck = () => {
    console.log("Checked");
  };
  return (
    <>
      <div className="block">
        <input
          className="m-3"
          type="radio"
          onClick={handleCheck}

        ></input>
        <label>Tiempo real</label>
      </div>
      <div>
        <input className="m-3" 
          type="radio" 
          value={false}
          onClick={handleCheck}
          >
        </input>
        <label>Histórico</label>
        <select className="ml-4" type="hidden">
          <option>Selecciona una opción</option>
          <option>1</option>
          <option>5</option>
          <option>15</option>
        </select>
      </div>
    </>
  );
};

export default Details;
