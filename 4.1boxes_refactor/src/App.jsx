import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../src/style.css";
// function Box1() {
//   return (
//     <div className="box1">
//       <Box2 />
//     </div>
//   );
// }
// function Box2() {
//   return (
//     <div className="box2">
//       <Box3 />
//     </div>
//   );
// }
// function Box3() {
//   return (
//     <div className="box3">
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// }
// function Box4() {
//   return <div className="box4"></div>;
// }
import Box1 from "./components/Box1/Box1";

function App() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

export default App;
