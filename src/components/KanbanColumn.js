import React from "react";
import Ticket from "./Ticket";

const KanbanColumn = ({ title, tickets, users }) => {
  const ticketCount = tickets.length; // Count of tickets

  return (
    <div className="kanban-column">
      <h3 className="column-title">{title}</h3>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

export default KanbanColumn;
