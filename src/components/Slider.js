import React, { Component } from 'react';

class slider extends Component {
    render() {
        return (
            <div>
            <div className="slider wide">
              <div className=" row slider__text">
                <img src="https://www.playzone.vn/image/catalog/chip/intel10/11107.png" alt="" className="slider__img" />
                <div className="slider__text-heading">
                  <h1>Le Catering</h1>
                  <p>Le CateringLe Catering</p>
                </div>
              </div>
            </div>
            <div className="slider-bot  wide ">
              <div className=" row slider__text no-gutters">
                <a href="https://www.playzone.vn/image/catalog/chip/intel10/11107.png" className="col l-6 slider__bot-text">
                  <img src="./map.jpg" alt="" className="slider-bot__img" />
                  <div className="slider__text-des">
                    <h1>Le Catering</h1>
                    <p>Le CateringLe Catering</p>
                  </div>
                </a>
                <a href="https://www.playzone.vn/image/catalog/chip/intel10/11107.png" className="col l-6 slider__bot-text">
                  <img src="./map.jpg" alt="" className="slider-bot__img" />
                  <div className="slider__text-des">
                    <h1>Le Catering</h1>
                    <p>Le CateringLe Catering</p>
                  </div>
                </a>
              </div>
            </div>
          </div>          
        );
    }
}

export default slider;