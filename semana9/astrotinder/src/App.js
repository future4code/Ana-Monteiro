import React, { useState } from "react";
import Profile from "./components/Profile/Profile";
import Matches from "./components/Matches/Matches";

function App() {
  const [switchScreen, setSwitchScreen] = useState(true);

  const onClickChangeState = () => {
    setSwitchScreen(!switchScreen);
  };

  const switchComponent = () => {
    if (switchScreen) {
      return <Profile onClickProfile={onClickChangeState} />;
    } else {
      return <Matches onClickMatches={onClickChangeState} />;
    }
  };

  return <div>{switchComponent()}</div>;
}

export default App;
