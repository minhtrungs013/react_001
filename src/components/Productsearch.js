import React, { Component } from 'react';
import axios from 'axios';

class Productsearch extends Component {
    state = {
        listsUsers: [],
    }
    async componentDidMount() {
        const res = await axios.get('https://621fa031ce99a7de19438436.mockapi.io/users');
         
          console.log(res())
    }
    render() {
        return (
            <div className="col l-9 product">
            <div className="row product__heading">
              <h2>new products
              </h2>
            </div>
              <div className="row">
                       <div className="col l-4" >
                       <div className="product-new">
                         <div className="product__header">
                           <img src="./anh1.jpg" alt="" className="product__header-img" />
                           <div className="product__header-evaluate" />
                         </div>
                         <div className="product__title">
                           <h3 className="product__title-heading"></h3>
                           <h3 className="product__title-heading"></h3>
                           <h2 className="product__title-price">$94</h2>
                           <button className="product__title-btn">ADD To Cart</button>
                         </div>
                       </div>
                     </div>
            </div>
          </div>
        )
    }
}

export default Productsearch;