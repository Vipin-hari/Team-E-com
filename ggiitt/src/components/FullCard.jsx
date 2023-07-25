import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../components/FullCard.css";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";

const FullCard = ({ data }) => {
  const { id } = useParams();
  console.log(id);

  const [card, setCard] = useState({});
  const [size, setSize] = useState('size-M');

  useEffect(() => {
    const d = data?.filter((card) => card.id === parseInt(id));
    setCard(d);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="">
      {/* {data?.map((card, index) => ( */}
        <section className="full">
          <div className="container ">
            <div className="fullcard">
              {/* <h1>{card && card[0]?.title}</h1>
            <p>{card && card[0]?.description}</p> */}
              <title>{card && card[0]?.title}</title>
              <link
                href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
                rel="stylesheet"
              />

              <div className="wrapper">
                <div className="product-img">
                  <img
                    src={card && card[0]?.img}
                    height="420"
                    width="327"
                    alt={card && card[0]?.title}
                  />
                </div>
                <div className="product-info">
                  <div className="product-text">
                    <h1>{card && card[0]?.title}</h1>
                    <p>{card && card[0]?.description}</p>
                    <p>{card && card[0]?.brand}</p>
                    <p>
                      <label for="size">Choose a size: </label>
                      <select id="cars" onChange={(e) => setSize(e.target.value)}>
                        <option value="size-M">M</option>
                        <option value="size-L">L</option>
                        <option value="size-XL">XL</option>
                        <option value="size-S">S</option>
                      </select>
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <span>{card && card[0]?.price}</span>Z
                    </p>
                    {/* <a href="" className="addtocart">Add to cart</a> */}
                </div>
                <Link to={`/carts/${card[0]?.id}`} state={{ size: size }}>
                    <button className="buy-now-btn" type="button">buy now</button><br />
                    </Link>
                </div>
              </div>
            </div>
          </div>
      </section>
        {/* )} */}
    </div>
    <Aboutus/></>
  );
};

export default FullCard;