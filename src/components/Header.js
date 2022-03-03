import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
class header extends Component {
    render() {
        return (
            <header className="header grid wide">
            <div className="container">
              <div className="row navbar">
                <a href="https://www.youtube.com/" className="navbar_link">
                  <img src="http://livedemo00.template-help.com/woocommerce_48363/wp-content/themes/theme48363/images/logo.png" alt="" className="navbar_img" />
                </a>
                <div className="navbar">
                  <form action="" className="search">
                    <input type="text" className="search__input" placeholder="Search" />
                    <button className="search__input-submit">
                      <i className="header__search-icon fas fa-search" />
                    </button>
                  </form>
                  <div className="cart">
                    <button className="cart__btn">
                      <i className="fa-solid fa-cart-shopping" />
                      <h3>My Cart</h3>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <ul className=" row navbar__list">
                  <li className="col l-2 navbar__item">
                    
                    <NavLink to="/" className="navbar__item-link" exact={true}>Home</NavLink>
                    <div className="navbar__items navbar__items-ac" />
                  </li>
                  <li className="col l-2 navbar__item">
                    <NavLink to="/Product" className="navbar__item-link"> About</NavLink>
                    <div className="navbar__items " />
                    <ul className="navbar__list-des">
                      <li className="navbar__item-des">
                        <a href="" className="navbar__item-link--des">Testimonials</a>
                      </li>
                      <li className="navbar__item-des">
                        <a href="" className="navbar__item-link--des">Archives</a>
                      </li>
                      <li className="navbar__item-des">
                        <a href="" className="navbar__item-link--des">FAQs</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col l-2 navbar__item">
                    <NavLink to="/ProductSearch" className="navbar__item-link">Shop</NavLink>
                    <div className="navbar__items " />
                  </li>
                  <li className="col l-2 navbar__item">
                    <a href="" className="navbar__item-link">Portfolio</a>
                    <div className="navbar__items " />
                    <ul className="navbar__list-des">
                      <li className="navbar__item-des">
                        <a href="" className="navbar__item-link--des">Testimonials</a>
                      </li>
                      <li className="navbar__item-des">
                        <a href="" className="navbar__item-link--des">Archives</a>
                      </li>
                      <li className="navbar__item-des navbar__item-desi">
                        <a href="" className="navbar__item-link--des">FAQs <i className="navbar__item-icon--des fa-solid fa-angle-right" /></a>
                        <ul className="navbar__list-desi">
                          <li className="navbar__item-des">
                            <a href="" className="navbar__item-link--des">Testimonials</a>
                          </li>
                          <li className="navbar__item-des">
                            <a href="" className="navbar__item-link--des">Archives</a>
                          </li>
                          <li className="navbar__item-des">
                            <a href="" className="navbar__item-link--des">FAQs</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="col l-2 navbar__item">
                    <a href="" className="navbar__item-link">Blog</a>
                    <div className="navbar__items " />
                  </li>
                  <li className="col l-2 navbar__item">
                    <a href="" className="navbar__item-link">Contacts</a>
                    <div className="navbar__items " />
                  </li>
                </ul>
              </div>
            </div>
          </header>
          
        );
    }
}

export default header;