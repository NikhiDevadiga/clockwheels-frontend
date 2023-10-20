import React, { useEffect, useState } from "react";
import "./product.css";
import logo from "./logo.png";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API request to fetch the product data
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        setProducts(response.data); // Assuming the response is an array of product objects
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="Clock Wheels" />
        </div>
        <div className="search-bar">
          <input type="text" className="input" placeholder="Search..." />
          <div className="btn">
            <i className="fas fa-magnifying-glass"></i>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="account.html">
              <i className="fas fa-heart fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="account.html">
              <i className="fas fa-user fa-xl"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-bar">
        <ul>
          <li>
            <a href="#">Two Wheeler</a>
            <div className="menu-1">
              <ul>
                <li>
                  <a href="#">Bike</a>
                </li>
                <li>
                  <a href="#">Scooty</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Four Wheeler</a>
          </li>
        </ul>
      </div>
      <div className="gallery">
        {products.map((product) => (
          <div key={product._id.$oid} className="content">
            {/* <div classclassName="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card" w-100>
                  <img src={product.Vimage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title">{product.Vname}</h2>
                    <h3 className="card-title">{product.Vprice}</h3>
                    <button>Rent</button>
                  </div>
                </div>
              </div>
            </div> */}

            <img src={product.Vimage} alt={product.Vname} />
            <h2>{product.Vname}</h2>
            <h3>{product.Vprice}</h3>
            <button>Rent</button>
          </div>
        ))}
        {/* Add more content items as needed */}
      </div>
    </div>
  );
};

export default Product;
