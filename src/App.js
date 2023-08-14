import React, { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options";
import KanbanBoard from "./components/KanbanBoard";

const groupOptions = ["status", "user", "priority"];
const sortOptions = ["priority", "title"];

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // State to store users data
  const [selectedDisplay, setSelectedDisplay] = useState("grouping");
  const [selectedGrouping, setSelectedGrouping] = useState("status");
  const [selectedSorting, setSelectedSorting] = useState("priority");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apimocha.com/quicksell/data");
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users); // Set the users data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Options
        selectedDisplay={selectedDisplay}
        setSelectedDisplay={setSelectedDisplay}
        groupOptions={groupOptions}
        sortOptions={sortOptions}
        selectedGrouping={selectedGrouping}
        setSelectedGrouping={setSelectedGrouping}
        selectedSorting={selectedSorting}
        setSelectedSorting={setSelectedSorting}
      />
      <KanbanBoard
        tickets={tickets}
        selectedGrouping={selectedGrouping}
        selectedSorting={selectedSorting}
        users={users} // Pass the users data
      />
    </div>
  );
};

export default App;
