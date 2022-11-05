import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcreCreamView from "./features/iceCream/IcreCreamView";
import UserView from "./features/user/UserView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IcreCreamView />
      <UserView />
    </div>
  );
}

export default App;
