import React from "react";

class TrafficLight extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLight: null,
    };
  }

  render() {
    console.log(this.state);
    let redExtraLight = "";
    if (this.state.selectedLight == "red") redExtraLight = "selectRed";
    let yellowExtraLight = "";
    if (this.state.selectedLight == "yellow") yellowExtraLight = "selectYellow";
    let greenExtraLight = "";
    if (this.state.selectedLight == "green") greenExtraLight = "selectGreen";

    return (
      <div>
        <div id="supportTraffic"></div>
        <div id="container">
          <div
            className={`redLight ` + redExtraLight}
            onClick={() => this.setState({ selectedLight: "red" })}
          ></div>
          <div
            className={`yellowLight ` + yellowExtraLight}
            onClick={() => this.setState({ selectedLight: "yellow" })}
          ></div>
          <div
            className={`greenLight ` + greenExtraLight}
            onClick={() => this.setState({ selectedLight: "green" })}
          ></div>
        </div>
      </div>
    );
  }
}

export default TrafficLight;
