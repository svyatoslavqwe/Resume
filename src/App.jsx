import React from "react";
import { Paper } from "@mui/material";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Paper sx={{ background: "#fff", padding: "1rem" }}>
        <PersonalInfo />
        <Projects />
      </Paper>
    </div>
  );
}

export default App;
