import React from "react";
import "./App.css";
import Buy from "./components/Buy";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import FullCard from "./components/FullCard";
import { useCart } from "react-use-cart";
import Cart from "./components/Cart";
import { Card } from "react-bootstrap";

const NewPage = () => {
  const data = [
    {
      id: 1,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F60%2F2a%2F602a44c930651379edfb0cb30ca9c62d337fbf2d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Relaxed Fit Cotton cargo joggers",
      price: "10",
      description: "This is Joggers",
      category: "men",
      size: "",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 2,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "COOLMAX® Regular Fit T-shirt",
      price: "30",
      description: "T shirt",
      category: "men",
      size: "",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 3,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2F13%2Fa913e1d6543ef465cd25494722562d9423aed9ad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: " Relaxed Fit Oxford shirt",
      price: "30",
      description: "shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    //   {

    //     img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2F35%2F20356dd91d87a4a1e9275e15cdff29c8dcf7269b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    //     title: "Relaxed Fit Hoodie",
    //     price: "150",
    //     description: "Hoodie",
    //     category: "men",
    //     size: "s,L,M",

    //     brand: "ZARA",
    //   },
    {
      id: 4,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd2%2F32%2Fd23241daefee8c80f3b93ce796d027f44073075e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Slim Jeans",
      price: "10",
      description: "Jeans",
      category: "men",
      size: "s,L,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 5,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "COOLMAX® Regular Fit T-shirt",
      price: "32",
      description: "T shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 5,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "COOLMAX® Regular Fit T-shirt",
      price: "20",
      description: "T shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"Tharkuri Vipin",
      brand: "ZARA",
    },
    {
      id: 6,
      img: "https://static.zara.net/photos///2023/I/0/1/p/0264/454/620/2/w/608/0264454620_2_1_1.jpg?ts=1688724527080",
      title: "Jumpsuit",
      price: "30",
      description: "It is a JumpSuit",
      category: "women",
      size: "M,S,L",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },

    {
      id: 7,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2e%2F01%2F2e01e8e5ecb735c2669215f36e0603fd7bf4e3b9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Single-breasted blazer",
      price: "60",
      description: "Blazer",
      category: "women",
      size: "L,S,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 8,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F75%2F21%2F75211096609f78549c2e7edf11ba29d3d9c81198.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Twill cargo trousers",
      price: "40",
      description: "Trousers",
      category: "women",
      size: "L,S,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 9,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe3%2F08%2Fe308650d548a86b54a2e0fae9c385f03d030f398.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Suit waistcoat",
      price: "20",
      description: "Suit",
      category: "women",
      size: "L,S,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
    {
      id: 10,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F58%2F4e%2F584ef73f36ddc964b2d9b1bdf1f7bc77726fd2d1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Oversized seersucker shirt",
      price: "20",
      description: "Suit",
      category: "women",
      size: "L,S,M",
      seller_address:"Tharkuri Vipin",

      brand: "ZARA",
    },
  ];
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Buy />}></Route>
          {/* <Route exact path='/category' element={<Category/>}></Route> */}
          {/* <Route path="/Men" element={<Men />}>
            {" "}
          </Route>
          <Route path="/Women" element={<Women />}>
            {" "}
          </Route>
          <Route path="/All" element={<Sell />}>
            {" "}
          </Route> */}

          {/* <Route path="/display" element={<ProductDetail />}>
          {" "}
        </Route> */}
          {/* <Route path="/display/:id" element={<ProductDetail />} /> */}

          {/* <Route exact path="/" component={Sell} /> */}
          {/* <Route exact path="/product/:id" component={ProductDetail} />
           */}
          <Route path="/display" element={<Hero data={data} />}></Route>
          <Route path="/cards/:id" element={<FullCard data={data} />}></Route>
          <Route path={"/carts/:id"} element={<Cart data={data}/>}></Route>
          <Route path="/Home" element={<Buy />}></Route>
          <Route path="/products" element={<Hero data={data}/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default NewPage;
