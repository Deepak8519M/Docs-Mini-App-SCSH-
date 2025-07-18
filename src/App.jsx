import React from "react";
import Background from "./components/Background";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 relative cursor-pointer">
      <Background />
      <div className="w-full h-screen fixed top-0 left-0 z-[3]  bg-sky-800/50"></div>
    </div>
  );
}

export default App;
