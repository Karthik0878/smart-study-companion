import React from "react";
import NoteInput from "./components/NoteInput";
import QuizDisplay from "./components/QuizDisplay";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <h1>Smart Study Companion</h1>
      <NoteInput />
      <QuizDisplay />
      <Dashboard />
    </div>
  );
}

export default App;
