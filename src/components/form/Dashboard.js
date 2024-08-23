import { Container } from "@mui/material";
import React from "react";
import "./Dashboard.css";
import AddIcon from "@mui/icons-material/Add";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="feedback-heading-container">USER FEEDBACK</div>
      <div className="form-container">
        <div className="form-layout">
          <div>
            <AddIcon className="add-icon" />
            <p className="new-form-text">New Form</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
