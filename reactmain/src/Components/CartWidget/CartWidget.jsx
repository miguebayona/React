import { Cart } from "../icons/Cart";
import './cartWidget.css'

const CartWidget = () => {
    letCartItemNumber = 0
    return (
        <div className="cart-widget">
            <span className="cart-span">2</span>
            <Cart/>
        </div>
    );
}

export default CartWidget;