import React from "react";
import KanbanColumn from "./KanbanColumn";

const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority"
};

const priorityOrder = ["No priority", "Urgent", "High", "Medium", "Low"];

const KanbanBoard = ({ tickets, users, selectedGrouping, selectedSorting }) => {
  const groupedTickets = () => {
    const grouped = {};

    tickets.forEach((ticket) => {
      let groupValue;

      if (selectedGrouping === "status") {
        groupValue = ticket.status;
      } else if (selectedGrouping === "user") {
        const user = users.find((user) => user.id === ticket.userId);
        groupValue = user ? user.name : "Unknown User";
      } else {
        groupValue = priorityLabels[ticket.priority];
      }

      if (!grouped[groupValue]) {
        grouped[groupValue] = [];
      }
      grouped[groupValue].push(ticket);
    });

    const sortedGrouped = {};

    if (selectedGrouping === "priority") {
      priorityOrder.forEach((priorityText) => {
        if (grouped[priorityText]) {
          sortedGrouped[priorityText] = sortTickets(grouped[priorityText]);
        }
      });
    } else {
      for (const group in grouped) {
        sortedGrouped[group] = sortTickets(grouped[group]);
      }
    }

    return sortedGrouped;
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (selectedSorting === "priority") {
        return (
          priorityOrder.indexOf(priorityLabels[a.priority]) -
          priorityOrder.indexOf(priorityLabels[b.priority])
        );
      } else if (selectedSorting === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets()).map(([groupValue, groupTickets]) => (
        <KanbanColumn
          key={groupValue}
          title={groupValue}
          tickets={groupTickets}
          users={users} // Pass the users data here
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
