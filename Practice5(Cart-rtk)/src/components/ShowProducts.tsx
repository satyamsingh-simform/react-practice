import { useAppDispatch, useAppSelector } from "../hooks/useStoreType";
import {addToCart} from '../features/cartSlice'

export type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 65000,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 1500,
  },
  {
    id: 3,
    name: "Mouse",
    price: 800,
  },
  {
    id: 4,
    name: "Monitor",
    price: 12000,
  },
  {
    id: 5,
    name: "Headphones",
    price: 2500,
  },
  {
    id: 6,
    name: "Webcam",
    price: 3200,
  },
];

export default function ShowProducts() {
  // TODO:
  // const dispatch = useDispatch();

const dispatch=useAppDispatch();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>₹ {product.price}</p>

          <button className="border"
            onClick={()=>dispatch(addToCart(product))}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}