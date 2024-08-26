import React from "react";
import { Modal } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContextProvider";
const ListOfCartItems = () => {
  const {
    cartItems,
    setCartItems,
    showModal,
    setShowModal,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(CartContext);

  const handleClose = () => setShowModal(false);
  const totalValue = cartItems
    .filter((item) => item.id !== "")
    .reduce(
      (total, item) =>
        total + parseInt(item.price) * parseInt(item.quantity),
      0
    );
  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h1 className="text-2xl font-semibold text-[#1b1b1b] opacity-35 leading-normal">
            Your Cart Items
          </h1>
        </Modal.Header>
        <Modal.Body>
          {/* //List of Items //counter //total values //coupon code //discounted or
          offer value //method of payment */}
          <ul>
            {cartItems
              .filter((item) => item.id !== "")
              .map((item, index) => {
                return (
                  <li key={item.id}>
                    <div className="flex justify-start items-start gap-4 p-2">
                      <div>
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="h-32 w-32 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-lg font-medium text-black ">
                          {" "}
                          {item.title}
                        </h4>
                        <p>${item.price}</p>
                        <div>
                          <button
                            disabled={item.quantity === 1}
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <p className="text-red-500">
                            {parseInt(item.price) *
                              item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          <p>Total Amount: {totalValue}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListOfCartItems;
