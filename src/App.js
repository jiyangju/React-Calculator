
import { useState, useEffect } from "react";
import Display from "./components/Display";
import Keys from "./components/Keys";

function App() {
  const [firstInput, setFirstInput] = useState(null);
  const [secondInput, setSecondInput] = useState(null);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  useEffect(() => console.log("first", firstInput), [firstInput])

  const handleKeyPress = (item) => {
    
      if(item.isNum){
      setFirstInput(prev => prev === null ? item.text : prev + item.text)
    }
    
  }

  return (
    <div className="calculator">
      <Display/>
      <Keys onPress={handleKeyPress}/>
    </div>
  );
}

export default App;
