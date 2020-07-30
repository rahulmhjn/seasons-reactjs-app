import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: 40 };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState
        this.setState({ lat: position.coords.latitude });

        //we did not!!!
        // this.state.lat = position.coords.latitude
      },
      (err) => console.log(err)
    );
  }

  // React says we have to return render!!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
