import { Link } from "react-router-dom";
import PageCover from "../components/shared/PageCover";
import useWishList from "../hooks/useWishList";
import ProductCard from "../Ui/ProductCard";

const WishList = () => {
  const [wish] = useWishList();
  console.log(wish);
  return (
    <>
      <PageCover title={"Wish-List"}></PageCover>
      {wish.length > 0 ? (
        <div className="max-w-7xl mx-auto my-20">
          <div className="grid md:grid-cols-4 gap-6 px-5">
            {wish?.map((ws) => (
              <ProductCard key={ws._id} item={ws}></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="my-40">
          <h1 className="text-2xl font-semibold text-center">
            Not added to wishlist anything
          </h1>
          <div className="flex justify-center">
            <Link to="/shop">
              <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black">
                <p>Shop Now</p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WishList;
