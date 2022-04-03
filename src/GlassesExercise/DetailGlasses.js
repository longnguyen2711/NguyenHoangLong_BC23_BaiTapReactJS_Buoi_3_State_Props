import React, { Component } from "react";

export default class DetailGlasses extends Component {
  render() {
    
    let { name, price, url, desc } = this.props.glasses;

    const keyFrame = `@keyframes animateChangeGlass${Date.now()}{
      from {
        width: 50px;
        transform: translate(100%) rotate(135deg);        
      }
      to {
        width: 150px;
        transform: translate(-50%) rotate(0deg);
      }}`
    
    const glassesAppear = {
      animation: `animateChangeGlass${Date.now()} 1s`
    }

    return (

      <div id="detailGlassRender" className="row d-flex justify-content-around mt-5">

        <style>{keyFrame}</style>

        <div className="card card-1">
          <img src="./img/glassesImage/model.jpg" alt="..." width={250} />
          <img src={url} alt="..." width={150} style={glassesAppear}/>
          <div className="card-info d-flex align-items-start flex-column justify-content-center">
            <h1>{name}: {price}$</h1>
            <p>{desc}</p>
          </div>
        </div>

        <div className="card card-2">
          <img src="./img/glassesImage/model.jpg" alt="..." width={250} />
          <img src={url} alt="..." width={150} style={glassesAppear}/>
          <div className="card-info d-flex align-items-start flex-column justify-content-center">
            <h1>{name}: {price}$</h1>
            <p>{desc}</p>
          </div>
        </div>

        <div className="card card-3">
          <img src="./img/glassesImage/model.jpg" alt="..." width={250} />
          <img src=""/>
        </div>

      </div>
    );
  }
}
