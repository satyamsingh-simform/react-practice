import { Cart } from "./components/Cart"
import ShowProducts from "./components/ShowProducts"

export const App = () => {
  return (
    <div className="flex gap-30">
      <ShowProducts/>
      <Cart/>
    </div>
  )
}
