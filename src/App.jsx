import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AllExpense from "../components/AllExpense";

function App() {
  const [expense, setExpense] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });
  // 2. Persist to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  function add(title, amount) {
    const data = {
      _id: Date.now(),
      title,
      amount,
      date: new Date().toLocaleDateString(),
    };
    setExpense((prev) => [...prev, data]);
  }

  function deleteExpense(id) {
    setExpense((prev) => prev.filter((item) => item._id !== id));
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <Navbar />
                <Home add={add} />
              </div>
            </div>
          }
        />
        <Route
          path="/all-expense"
          element={
            <div>
              <Navbar />
              <AllExpense expense={expense} deleteExpense={deleteExpense} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
