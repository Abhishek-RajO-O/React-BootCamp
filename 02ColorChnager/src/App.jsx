import { useState } from "react";
// import Button from "./comonents/Button"
function App() {
  let [color,setColor] = useState("bg-white");
  const buttons = [
  { text: "Red", color: "bg-red-500" },
  { text: "Blue", color: "bg-blue-500" },
  { text: "Green", color: "bg-green-500" },
  { text: "Yellow", color: "bg-yellow-500" },
  { text : "Browm", color: "bg-amber-900"},
];
   
  return (
   <div className={`min-h-screen  ${color} flex items-baseline-last justify-center`}>
  <div className="w-auto max-w-6xl mx-auto px-6 pb-6">
    <div className="flex flex-wrap justify-center gap-6 rounded-2xl bg-white p-8 shadow-lg">
      {buttons.map((btn) => (
        <button className={`${btn.color} text-white px-4 py-2 rounded`} 
     onClick={()=>{
        setColor(btn.color);
     }}>
      {btn.text}
    </button>
      ))}
    </div>
  </div>
</div>
  )
}

export default App
