import { useState } from "react";
import Values from "values.js";

import SingleColor from "./SingleColor";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#2c2e3b").all(10)); //get next 10 values to display in UI

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#2c2e3b"
            className={error ? "error" : null}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              hexColor={color.hex}
              {...color}
            />
          );
        })}
      </section>
    </>
  );
};

export default Dashboard;
