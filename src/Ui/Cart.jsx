import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  let discountAndShippingPrice = 0;
  if (subtotal) {
    discountAndShippingPrice = subtotal - 20;
  } else {
    discountAndShippingPrice = 0;
  }

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-9 my-20">
      <div className="md:col-span-2 w-full">
        <div className="grid grid-cols-6 font-semibold mb-5 border-b-2 pb-4">
          <h1 className="col-span-2">Products</h1>
          <h1 className="col-span-1">Price</h1>
          <h1 className="col-span-1">Quantity</h1>
          <h1 className="col-span-1">Total Price</h1>
          <h1 className="col-span-1"></h1>
        </div>
        {cart.length > 0 ? (
          <div>
            {cart?.map((crt) => (
              <div
                key={crt._id}
                className="my-4 border-b-2 pb-4 grid grid-cols-6 w-full gap-6 items-center"
              >
                <div className="flex items-center gap-4 col-span-2">
                  <div>
                    <img
                      className="w-24 rounded-lg"
                      src={crt?.image[0].image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold"> {crt?.name}</h1>
                    <p>Color: {crt?.color}</p>
                    <p>Size: {crt?.size}</p>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">
                    ${crt?.singlePrice ? crt?.singlePrice : crt?.price}
                  </h1>
                </div>
                <div>
                  <h1 className="font-semibold">{crt?.quentity}</h1>
                </div>
                <div>
                  <h1 className="font-semibold">
                    ${crt?.price ? crt?.price : crt?.singlePrice}
                  </h1>
                </div>
                <div className="col-span-1">
                  <div className="flex">
                    <p
                      className="bg-red-600 transition-all border items-center flex p-2 rounded-full cursor-pointer text-white hover:border-black hover:text-red-600 hover:bg-inherit"
                      onClick={() => handledelete(crt?._id)}
                    >
                      <span className="">
                        <MdDelete className="size-7"></MdDelete>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-40">
            <h1 className="text-2xl font-semibold">No Product added yet</h1>
            <div className="flex items-center justify-center">
              <Link to="/shop">
                <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black">
                  <p>Shop Now</p>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="md:col-span-1 ">
        <div className="bg-gray-100 p-7 rounded-xl">
          <h1 className="text-2xl font-semibold">Order Summery</h1>
          <div className="border-b-2 font-semibold flex justify-between py-5">
            <h1>Subtotal</h1>
            <h1>${subtotal}</h1>
          </div>
          <div className="border-b-2 font-semibold flex justify-between py-5">
            <h1>Discounts</h1>
            <h1>$20</h1>
          </div>
          <div className="border-b-2 font-semibold  flex justify-between py-5">
            <h1>Shipping</h1>
            <h1>$35</h1>
          </div>
          <div className="flex text-2xl font-semibold mt-5 justify-between">
            <h1>Total</h1>
            <h1>${discountAndShippingPrice.toFixed(2)}</h1>
          </div>
          <div className="mt-5">
            <label>
              <input type="checkbox" className="mr-2" />I agree with the{" "}
              <Link className="underline">terms and conditions</Link>
            </label>
          </div>
          <div className="mt-5 text-center">
            {cart.length ? (
              <Link to="/myaccount/payment">
                <button className="bottom-5 left-6 w-5/6 py-2 rounded-2xl transition-all  duration-300  bg-black text-white hover:bg-red-600">
                  Process To Checkout
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="bottom-5 left-6 w-5/6 py-2 disabled:cursor-not-allowed disabled:hover:bg-gray-400 rounded-2xl transition-all  duration-300  bg-black text-white hover:bg-red-600"
              >
                Process To Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
