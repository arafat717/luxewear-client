import PageCover from "../components/shared/PageCover";
import useWishList from "../hooks/useWishList";
import ProductCard from "../Ui/ProductCard";

const WishList = () => {
  const [wish] = useWishList();
  console.log(wish);
  return (
    <>
      <PageCover title={"Wish-List"}></PageCover>
      <div className="max-w-7xl mx-auto my-20">
        <div className="grid md:grid-cols-4 gap-6 px-5">
          {wish?.map((ws) => (
            <ProductCard key={ws._id} item={ws}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishList;
