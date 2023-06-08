import React, { useState } from "react";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const navigateToScreen2 = () => {
    setCurrentScreen(2);
  };

  const navigateToScreen3 = () => {
    setCurrentScreen(3);
  };

  const navigateToScreen1 = () => {
    setCurrentScreen(1);
  };

  return (
    <div>
      {currentScreen === 1 && <Screen1 navigateToScreen2={navigateToScreen2} />}
      {currentScreen === 2 && <Screen2 navigateToScreen3={navigateToScreen3} />}
      {currentScreen === 3 && <Screen3 navigateToScreen1={navigateToScreen1} />}
    </div>
  );
};

export default App;
