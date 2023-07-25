import React from 'react';
import Card from "react-bootstrap/Card";
import "./workmod.css";

function Workmod () {
    return (
        <div className="container-cards">
        <div className="kart">
              <Card style={{ width: "300px"}}>
                {/* <Card.Img variant="top" src="https://images.news18.com/webstories/2023/03/elon-musk.jpg" height="330px"/> */}
                <Card.Body>
                <Card.Title>Step-1</Card.Title><br></br>
                  <Card.Title>Sign-Up</Card.Title>
                  <Card.Text>
                    First ou can Sign-Up ur account by using Metamask.
                  </Card.Text>
                </Card.Body>
              </Card>
    
              <Card style={{ width: '300px'}}>
                {/* <Card.Img variant="top" src="https://r.lvmh-static.com/uploads/2014/10/ba-comex-bis.jpg" height= "330px" /> */}
                <Card.Body>
                <Card.Title>Step-2</Card.Title><br></br>
                  <Card.Title>Upload your product & catalog</Card.Title>
                  <Card.Text>
                              After completing the Sign-Up process,
                              upload your product catalog on the Zordshop Supplier Panel.
                  </Card.Text>
                </Card.Body>
              </Card>
    
              <Card style={{ width: '300px' }}>
                {/* <Card.Img variant="top" src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/QYOZWUSYPVJ33PNWK7R323ZKNY.jpg"  height="330px"/> */}
                <Card.Body>
                <Card.Title>Step-3</Card.Title><br></br>
                  <Card.Title>Receive & Ship Orders</Card.Title>
                  <Card.Text>
                  Place your order in our Zordshop website and then you get the tracking deat
                  </Card.Text>
                </Card.Body>
              </Card>
    
              <Card style={{ width: '350px' }}>
                {/* <Card.Img variant="top" src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/QYOZWUSYPVJ33PNWK7R323ZKNY.jpg"  height="330px"/> */}
                <Card.Body>
                <Card.Title>Step-4</Card.Title><br></br>
                  <Card.Title>Receive Payments</Card.Title>
                  <Card.Text>
                  Payment is securely deposited directly to your metamask wallet account on ZordShop following a 7-day payment cycle from order delivery, including Cash on Delivery orders.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
        </div>
        );
    }
export default Workmod;
