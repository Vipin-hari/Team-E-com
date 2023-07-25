import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./examplepage.css";
import { Link } from 'react-router-dom';

function ExamplePage (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className='design'>
      <Button className="btn-clas" variant="primary" onClick={handleShow}>
        Start Selling
      </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title >Seller Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='vpn'>
      <form className="showcard">
        <label htmlFor="product_name">Product Name: </label>
        <input type="text" id="product_name" name="product_name" required /><br /><br />

        <label for="product_description">Product Description: </label><br></br>
        <textarea id="product_description" name="product_description" rows="4" cols="50" required></textarea><br></br><br></br>

        <label for="product_price">Product Price: </label>
        <input type="number" id="product_price" name="product_price" step="0.01" required/><br></br><br></br>
    
         <label for="product_quantity">Product Quantity: </label>
         <input type="number" id="product_quantity" name="product_quantity" required/><br></br><br></br>
    
    
        
        <label htmlFor="product_category">Product Category: </label>
        <select id="product_category" name="product_category" required>
          <option value="">Select a category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          {/* <option value="Accessories">Accessories</option> */}
        </select><br /><br />
        
        {/* <label htmlFor="product_subcategory">Product Subcategory: </label>
        <select id="product_subcategory" name="product_subcategory" value={subcategory} onChange={handleSubcategoryChange} required>
          <option value="">Select a subcategory</option>
          {subcategories[category] && subcategories[category].map((subcat) => (
            <option key={subcat} value={subcat}>{subcat}</option>
          ))}
        </select><br /><br /> */}

        <label for="product_image">Product Image: </label>
        <input type="file" id="product_image" name="product_image" required></input><br></br><br></br>
      </form>

        </Modal.Body>
        <Modal.Footer>
          <Link to= "/">
          <Button variant="primary" onClick={handleClose} className='roll'>
            Confirm
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      </div>

  );
}
export default ExamplePage;
