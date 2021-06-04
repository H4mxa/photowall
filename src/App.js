import React from "react";

function App() {
  const tasks = ["Hello", "world", "Programming"];
  return (
    <div className="App">
      <h1>Task list</h1>
      <ol>
        {tasks.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
