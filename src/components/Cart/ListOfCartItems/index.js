import React from "react";
import { Modal } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContextProvider";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const ListOfCartItems = () => {
  const {
    cartItems,
    setCartItems,
    showModal,
    setShowModal,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const handleClose = () => setShowModal(false);
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalValue = cartItems
    .filter((item) => item.id !== "")
    .reduce((total, item) => total + parseInt(item.price) * item.quantity, 0);

  const handleRedirect = () => {
    setShowModal(false);
    navigate("/all-products");
  };
  return (
    <div className="font-poppins">
      <Modal
        show={showModal}
        onHide={handleClose}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h1 className="text-2xl font-semibold text-gray-800">
            {cartItems.length === 1 ? "Your Cart is empty." : "Your Cart Items"}
          </h1>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 1 ? (
            <div className="flex justify-center">
              <button
                onClick={handleRedirect}
                className="text-center my-6 px-3 p-2 border text-white rounded-lg bg-pink-300 text-sm font-semibold"
              >
                View Products
              </button>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gray-200">
                {cartItems
                  .filter((item) => item.id !== "")
                  .map((item) => (
                    <li key={item.id} className="flex gap-4 py-4">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="h-32 w-32 rounded-lg border-2 border-gray-200 object-cover"
                      />
                      <div className="flex flex-col justify-between w-full">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button
                            className={`p-1 px-2 bg-gray-200 rounded-lg ${
                              item.quantity === 1
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-300"
                            }`}
                            disabled={item.quantity === 1}
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="text-lg font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1 px-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <p className="mt-2 text-red-500 font-semibold">
                          Total: ${parseInt(item.price) * item.quantity}
                        </p>
                      </div>
                      {/* <button>Remove Item</button> */}
                      <FaRegTrashCan
                        onClick={() => handleDelete(item.id)}
                        className="w-6 h-6 text-red-500 cursor-pointer"
                      />
                    </li>
                  ))}
              </ul>
              <div className="mt-6 text-right">
                <p className="text-xl font-semibold text-gray-800">
                  Total Amount: ${totalValue}
                </p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListOfCartItems;
