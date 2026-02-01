import React, { useState } from "react";
import "./expense.css";
const AllExpense = ({ expense, deleteExpense }) => {
  let amt = 0;
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="allExpense_MainDiv">
        <div
          className="listDetails"
          style={{ borderBottom: "2px solid white", marginBottom: "10px" }}
        >
          <h3>📋</h3>
          <h3 className="h3Size">List</h3>
          <h3 className="h3Size">Amount</h3>
        </div>

        {expense
          .filter((elements) =>
            elements.title.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((elements, index) => {
            amt += elements.amount;
            return (
              <div key={elements._id} className="allExpense_Div">
                <div className="listDetails">
                  <h3>{index + 1} ] </h3>
                  <h3 className="h3Size">{elements.title}</h3>
                  <h3 className="h3Size">{elements.amount}</h3>
                  <button
                    className=""
                    onClick={() => deleteExpense(elements._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        <h2 className="TotalExpense">Total Expense: {amt} Rupees</h2>
      </div>
    </div>
  );
};

export default AllExpense;
