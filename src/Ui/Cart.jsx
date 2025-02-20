import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  const discountAndShippingPrice = subtotal + 15;
  console.log(discountAndShippingPrice);
  console.log(subtotal);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-9 my-20">
      <div className="col-span-2 w-full">
        <div className="grid grid-cols-6 font-semibold mb-5 border-b-2 pb-4">
          <h1 className="col-span-2">Products</h1>
          <h1 className="col-span-1">Price</h1>
          <h1 className="col-span-1">Quantity</h1>
          <h1 className="col-span-1">Total Price</h1>
          <h1 className="col-span-1"></h1>
        </div>
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
                <p>
                  <span className="border border-red-700 text-red-700 cursor-pointer px-2 py-1 rounded-full hover:bg-red-700 hover:text-white">
                    x
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 ">
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
            <h1>${discountAndShippingPrice}</h1>
          </div>
          <div className="mt-5">
            <label>
              <input type="checkbox" className="mr-2" />I agree with the{" "}
              <Link className="underline">terms and conditions</Link>
            </label>
          </div>
          <div className="mt-5 text-center">
            <button className="bottom-5 left-6 w-5/6 py-2 rounded-2xl transition-all  duration-300  bg-black text-white hover:bg-red-600">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
