import { useEffect, useState } from 'react';
import '../App.css';
import React from 'react';

function ProductApiCall() {
  const [data, setData] = useState([]);
  const [api_data, setApi_Data] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [showModal, setShowModal] = useState(false); // Track modal visibility
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handleNext = () => {
    if (itemOffset + itemsPerPage < data.length) {
      setItemOffset(itemOffset + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (itemOffset - itemsPerPage >= 0) {
      setItemOffset(itemOffset - itemsPerPage);
    }
  };

  const showDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((result) => result.json())
      .then((resp) => {
        setApi_Data(resp);
        setShowModal(true); // Open the modal
      });
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <div className='pagination'>
        <button type='button' onClick={handlePrevious}>
          Previous
        </button>
        <p>{Math.floor(itemOffset / itemsPerPage) + 1} of {pageCount}</p>
        <button type='button' onClick={handleNext}>
          Next
        </button>
      </div>

      <header className="masthead clear">
        <div className="centered">
          <div className="site-branding">
            <h1 className="site-title">Products Details</h1>
          </div>
        </div>
      </header>

      <div className="cards-container">
        {currentItems.map((item) => (
          <div className="card" key={item.id}>
            <picture>
              <img
                src={item.image}
                alt={item.title}
                onClick={() => showDetails(item.id)} // Open modal when clicking on the image
              />
            </picture>
            <div className="card-content">
              <h2>{item.title}</h2>
              <h1>Price: ${item.price}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Modal controlled by state */}
      {showModal && (
        <div className="modal fade show d-block" tabindex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{api_data.title}</h1>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={api_data.image} alt={api_data.title} />
                <h2 style={{ color: 'blue' }}>${api_data.price}rs</h2>
                <p><b>{api_data.description}</b></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductApiCall;
