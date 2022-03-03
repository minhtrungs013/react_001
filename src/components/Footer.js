import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer wide">
            <div className="footer__heading row">disegin by trung</div>
            <div className="row footer__tilte ">
              <div className="col l-3 footer__menu">
                <ul className="footer__list">
                  <li className="footer__item footer__item-menu">
                    <a href="" className="footer__link">Danh Mục</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">ACOUSTIC TREATMENT</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">AMPLIFIERS</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">AUDIO PROCESSING</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">BROADCAST &amp; RF</a>
                  </li>
                </ul>
              </div>
              <div className="col l-3 footer__menu">
                <ul className="footer__list">
                  <li className="footer__item footer__item-menu">
                    <a href="" className="footer__link">INFORMATION</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">CABLES, WIRE &amp; CONNECTORS</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">CONTACTS</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">DELIVERY</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">PRIVACY POLICY</a>
                  </li>
                </ul>
              </div>
              <div className="col l-3 footer__menu">
                <ul className="footer__list">
                  <li className="footer__item footer__item-menu">
                    <a href="" className="footer__link">ABOUT</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">HEADPHONES &amp; HEADSETS</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">INTERFACES &amp; CONVERTERS</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">MICROPHONES &amp; ACCESSORIES</a>
                  </li>
                </ul>
              </div>
              <div className="col l-3">
                <ul className="footer__list">
                  <li className="footer__item footer__item-menu">
                    <a href="" className="footer__link">POWER</a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">PERSONAL MONITOR SYSTEMS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Footer;