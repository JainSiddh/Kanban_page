import React from "react";
import "./ticket.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "react-fontawesome";

const Ticket = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId);

  return (
    <div className={`ticket priority-${ticket.priority}`}>
      <div className="ticket-id">{ticket.id}</div>
      <div className="ticket-title">
        <strong>{ticket.title}</strong>
      </div>
      <div className="ticket-details">
        <div className="ticket-user">
          User: {user ? user.name : "Unknown User"}
        </div>
        <div>
          {/* <div>
            <CircleIcon />
          </div> */}
          <div className="ticket-status">{ticket.tag}</div>
        </div>
        {/* <div className="ticket-priority">Priority: ({ticket.priority})</div> */}
      </div>
    </div>
  );
};

export default Ticket;
