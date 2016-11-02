import React from 'react';

class StartMenu extends React.Component {
  render() {
    if (this.props.currentMenu === "start") {
    return(
      <div className="start-menu">
        <h1>Park Runner</h1>
        <h2>Press<img className="enter-key" src="/Users/fanniewang/desktop/park-runner-game/images/enter_key.jpg"></img>To Play</h2>
        <h2>Press<img className="h-key" src="/Users/fanniewang/desktop/park-runner-game/images/h_key.png"></img>For Help</h2>
      </div>
    );
  } else if (this.props.currentMenu === "help") {
    debugger
    return (
      <div className="help-menu">
        <h1>Park Runner</h1>
        <h2>Help</h2>
        <h2></h2>
        <h2>Got it! Press<img className="enter-key" src="/Users/fanniewang/desktop/park-runner-game/images/enter_key.jpg"></img>To Play</h2>
      </div>
    )
  } else {
    return <div></div>;
  }
  }

}

export default StartMenu;
