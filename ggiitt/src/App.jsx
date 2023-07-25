import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mainpage from "./damaka/Mainpage";
import ImptPage from "./dandanakka/ImptPage";
import Buy from "./components/Buy";
import Hero from "./components/Hero";
import FullCard from "./components/FullCard";
import Cart from "./components/Cart";
import { Footer } from "./components/Footer";



function App() {
  const data = [
    {
      id: 1,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F60%2F2a%2F602a44c930651379edfb0cb30ca9c62d337fbf2d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Relaxed Fit Cotton cargo joggers",
      price: "120",
      description: "This is Joggers",
      category: "men",
      size: "L,M,S",
      seller_address:"0x1238766785abcd",

      brand: "ZARA",
    },
    {
      id: 2,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "COOLMAX® Regular Fit T-shirt",
      price: "320",
      description: "T shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"0x1298786785abcd",
      brand: "ZARA",
    },
    {
      id: 3,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2F13%2Fa913e1d6543ef465cd25494722562d9423aed9ad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: " Relaxed Fit Oxford shirt",
      price: "300",
      description: "shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"0x123abc6785abcd",

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
      price: "170",
      description: "Jeans",
      category: "men",
      size: "s,L,M",
      seller_address:"0x1238766bba5abcd",

      brand: "ZARA",
    },
    {
      id: 5,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "COOLMAX® Regular Fit T-shirt",
      price: "320",
      description: "T shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"0x1238cda6785abcd",

      brand: "ZARA",
    },
    {
      id: 5,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "COOLMAX® Regular Fit T-shirt",
      price: "320",
      description: "T shirt",
      category: "men",
      size: "s,L,M",
      seller_address:"0x123bbac6785abcd",

      brand: "ZARA",
    },
    {
      id: 6,
      img: "https://static.zara.net/photos///2023/I/0/1/p/0264/454/620/2/w/608/0264454620_2_1_1.jpg?ts=1688724527080",
      title: "Jumpsuit",
      price: "300",
      description: "It is a JumpSuit",
      category: "women",
      size: "M,S,L",
      seller_address:"0x1238bbca785abcd",

      brand: "ZARA",
    },

    {
      id: 7,
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2e%2F01%2F2e01e8e5ecb735c2669215f36e0603fd7bf4e3b9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      title: "Single-breasted blazer",
      price: "600",
      description: "Blazer",
      category: "women",
      size: "L,S,M",
      seller_address:"0x12387bcada5abcd",
      brand: "ZARA",
    },
    {
      id: 8,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F75%2F21%2F75211096609f78549c2e7edf11ba29d3d9c81198.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Twill cargo trousers",
      price: "450",
      description: "Trousers",
      category: "women",
      size: "L,S,M",
      seller_address:"0x1238700785abcd",

      brand: "ZARA",
    },
    {
      id: 9,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe3%2F08%2Fe308650d548a86b54a2e0fae9c385f03d030f398.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Suit waistcoat",
      price: "200",
      description: "Suit",
      category: "women",
      size: "L,S,M",
      seller_address:"0x9870766785abcd",

      brand: "ZARA",
    },
    {
      id: 10,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F58%2F4e%2F584ef73f36ddc964b2d9b1bdf1f7bc77726fd2d1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Oversized seersucker shirt",
      price: "200",
      description: "Suit",
      category: "women",
      size: "L,S,M",
      seller_address:"0x1238bcad85abcd",

      brand: "ZARA",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} exact element={<Mainpage />} />
        <Route path={`/imptpage`} exact element={<ImptPage />} />
        <Route exact path="/buyer" element={<Buy />}></Route>
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
      {/* <Footer /> */}
    </BrowserRouter>

      
  );
}

export default App;
