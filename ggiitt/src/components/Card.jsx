import React from "react";
import { Link } from "react-router-dom";
import "../components/Card.css";
import Navbar from "./Navbar";

const Card = ({ data }) => {
  return (
    <>
      <div className="card-grid ">
        
        {data?.map((card, index) => (
          <div key={index} className="d-flex flex-wrap nowrap">
            <div id="card" className="producttt" style={{ width: "  24rem" }}>
              <div className="container page-wrapper">
                <div className="page-inner">
                  <div className="row">
                    <div className="el-wrapper">
                      <div className="box-up">
                        <img className="img w-100" src={card.img} alt="" />
                        <div className="img-info">
                          <div className="info-inner">
                            <span className="p-name">{card.title}</span>
                            <span className="p-company">{card.brand}</span>
                          </div>
                          <div className="a-size">
                            {/* Available sizes :{" "} */}
                            {/* <span className="size">{card.size}</span> */}
                          </div>
                        </div>
                      </div>

                      <div className="box-down">
                        <div className="h-bg">
                          <div className="h-bg-inner"></div>
                        </div>

                        <a className="cart" href="#">
                          <span className="price">{card.price} Z</span>
                          <span className="add-to-cart">
                            {" "}
                            <Link
                              to={`/cards/${card.id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              View More
                            </Link>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export default Card;
