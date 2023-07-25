// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import Aboutus from './Aboutus';

// const Cart = ({ data }) => {
//   const { id } = useParams();
//   const location = useLocation();
//   const size = location?.state?.size;

//   const [card, setCard] = useState({});
//   const [showForm, setShowForm] = useState(false); // State to toggle the display of the form

//   useEffect(() => {
//     const d = data?.filter((card) => card.id === parseInt(id));
//     console.log('sh', data, id);
//     setCard(d);
//   }, [data, id]);

//   const handleProceedToCheckOut = () => {
//     setShowForm(true); // Show the form when the "Proceed to check out" button is clicked
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Handle the form submission here, e.g., submit to server, perform validation, etc.
//     // Once the form is successfully submitted, you may want to reset the form fields and hide the form
//     setShowForm(false);
//   };

//   return (
//     <><Navbar/>
//     <div className='card-container'>
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           src={card && card[0]?.img}
//           className="card-img-top"
//           alt={card && card[0]?.title}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{card && card[0]?.price}Z</h5>
//           <p>{size}</p>
//           <p className="card-text">
//             <p>{card && card[0]?.brand}</p>
//           </p>
//           <button onClick={handleProceedToCheckOut}></button>
//           {/* Conditionally render the "Proceed to check out" button or the form */}
//         </div>
//       </div>
//           <form onSubmit={handleFormSubmit}>
//             <h3>Customer Details</h3>
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" required />
//             </div>
//             <br />
//             <div>
//               <label htmlFor="phone">Phone:</label>
//               <input type="tel" id="phone" name="phone" required />
//             </div>
//             <br />
//             <div>
//               <label htmlFor="address">Address:</label>
//               <textarea id="address" name="address" required />
//             </div>
//             <br />
//             <button type="submit">Submit</button>
//           </form>
       


//     </div> <Aboutus/></>


//   );
// };

// export default Cart;








// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import Aboutus from './Aboutus';

// const Cart = ({ data }) => {
//   const { id } = useParams();
//   const location = useLocation();
//   const size = location?.state?.size;

//   const [card, setCard] = useState({});
//   const [showForm, setShowForm] = useState(false); // State to toggle the display of the form

//   // State to store customer details
//   const [customerDetails, setCustomerDetails] = useState({
//     name: '',
//     phone: '',
//     address: '',
//   });

//   useEffect(() => {
//     const d = data?.filter((card) => card.id === parseInt(id));
//     setCard(d);
//   }, [data, id]);

//   const handleProceedToCheckOut = () => {
//     setShowForm(true); // Show the form when the "Proceed to check out" button is clicked
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Extract form data
//     const formData = new FormData(event.target);
//     const name = formData.get('name');
//     const phone = formData.get('phone');
//     const address = formData.get('address');

//     // Store customer details in the state
//     setCustomerDetails({ name, phone, address });

//     // Hide the form after form submission
//     setShowForm(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='card-container'>
//         <div className="card" style={{ width: "18rem" }}>
//           {/* ... Existing card content ... */}
//           <div className="card-body">
//             <button onClick={handleProceedToCheckOut}>Proceed to Check Out</button>
//           </div>
//         </div>
//         {showForm ? (
//           <form onSubmit={handleFormSubmit}>
//             <h3>Customer Details</h3>
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" required />
//             </div>
//             <br />
//             <div>
//               <label htmlFor="phone">Phone:</label>
//               <input type="tel" id="phone" name="phone" required />
//             </div>
//             <br />
//             <div>
//               <label htmlFor="address">Address:</label>
//               <textarea id="address" name="address" required />
//             </div>
//             <br />
//             <button type="submit">Submit</button>
//           </form>
//         ) : null}

//         {customerDetails.name && (
//           <div>
//             <h3>Customer Details</h3>
//             <p>Name: {customerDetails.name}</p>
//             <p>Phone: {customerDetails.phone}</p>
//             <p>Address: {customerDetails.address}</p>
//           </div>
//         )}
//       </div>
//       <Aboutus />
//     </>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Aboutus from './Aboutus';

const Cart = ({ data }) => {
  const { id } = useParams();
  const location = useLocation();
  const size = location?.state?.size;

  const [card, setCard] = useState({});
  const [showForm, setShowForm] = useState(false); // State to toggle the display of the form

  // State to store customer details
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const d = data?.filter((card) => card.id === parseInt(id));
    console.log('sh', data, id);
    setCard(d);
  }, [data, id]);

  const handleProceedToCheckOut = () => {
    setShowForm(true); // Show the form when the "Proceed to check out" button is clicked
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Extract form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = formData.get('address');

    // Store customer details in the state
    setCustomerDetails({ name, phone, address });

    // Hide the form after form submission
    setShowForm(false);
  };

  return (
    <>
      <Navbar />
      <div className='card-container'>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={card && card[0]?.img}
            className="card-img-top"
            alt={card && card[0]?.title}
          />
          <div className="card-body">
            <h5 className="card-title">{card && card[0]?.price}Z</h5>
            <h1 className='seller-name'style={{fontSize:"23px"}}>Seller:</h1>
            <h5 className="card-address">{card && card[0]?.seller_address}abcd</h5>
            <p>{size}</p>
            <p className="card-text">
              <p>{card && card[0]?.brand}</p>
            </p>
            <button className='swayy' onClick={handleProceedToCheckOut}>Proceed to Check Out</button>
          </div>
        </div>

        {showForm ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Customer Details</h3>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <br />
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <br />
            <div>
              <label htmlFor="address">Address:</label>
              <textarea id="address" name="address" required />
            </div>
            <br />
            <button className="jimmy" type="submit">Submit</button>
          </form>
        ) : null}

        {customerDetails.name && (
          <div div="display-details">
            <h3>Customer Details</h3>
            <p>Name: {customerDetails.name}</p>
            <p>Phone: {customerDetails.phone}</p>
            <p>Address: {customerDetails.address}</p>
          </div>
        )}
      </div>
      <Aboutus />
    </>
  );
};

export default Cart;

