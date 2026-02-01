import React, { useState } from "react";
import "./Home.css";
const Home = ({ add }) => {
  const [titleVal, setTitle] = useState("");
  const [amountVal, setAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (amountVal <= 0) {
      alert("Amount should be greater than 0");
      return;
    }
    add(titleVal, Number(amountVal));
    setTitle("");
    setAmount(0);
  }

  return (
    <div className="HomeJsx">
      <div>
        {/*❌ Default form submit reloads page. So use handleSubmit to prevent it */}
        <form className="ExpenseForm" onSubmit={handleSubmit}>
          <input
            value={titleVal}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="type here"
            required
          />
          <input
            value={amountVal}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Amount in rupees > 0"
            required
          />

          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
