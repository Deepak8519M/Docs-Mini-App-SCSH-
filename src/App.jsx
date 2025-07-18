import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="w-full h-screen z-[4]  bg-red-500 fixed top-0 left-0 cursor-pointer">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
