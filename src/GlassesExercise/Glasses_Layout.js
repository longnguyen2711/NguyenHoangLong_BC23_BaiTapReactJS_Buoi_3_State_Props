import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json"
import DetailGlasses from "./DetailGlasses";
import './style.css'

export default class Glasses_Layout extends Component {
  
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesButtonList = () => {
    return dataGlasses.map((glass, index) => {
      return (
          <button key={index} onClick={() => {
              this.chooseGlasses(glass);
             }}>
              <img src={glass.url} alt="..." className="w-100" />
          </button>
      );
    });
  };

  chooseGlasses = (glassesClick) => {
    this.setState({
      glasses: glassesClick,
    });
  };

  render() {
    return (
      <div id="glassesExercise">
          <div div className="overlay">
              <h1 className="text-white text-center p-5">TRY GLASSES APP ONLY</h1>
              <div className="glasses container">
                  <DetailGlasses glasses={this.state.glasses} />
                  <div className="buttonGlasses mt-5 p-5 border rounded bg-light d-flex">
                    {this.renderGlassesButtonList()}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
