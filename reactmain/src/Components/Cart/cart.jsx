import { useCartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import './cart.css'
const Cart = () => {
    const {cart, clearCart, totalPrice} = useCartContext();
    
    if(cart.length !== 0){
        return (
            <div className="cart-container">
                <h1>Carrito</h1>
                <div>
                    {
                        cart.map((product)=>{
                            return <CartItem producto={product} />
                        })
                    }
                </div>
                <div>
                <p className="cart-total-price">{`Total: $${totalPrice()}`}</p>   
                </div>
                <div className="cart-btn-container">
                    <Link to={'/checkout'}><button className="finish-btn">Comprar</button></Link>
                    <Link to={'/'}><button className="back-to-store-btn">Ver más</button></Link>
                    <button className="clear-cart-btn" onClick={()=>{clearCart()}}>Vaciar Carrito</button>
                </div>
            </div>
        ) 
    } else{
        return (
            <div className="cart-container">
                <h1>Items en Carrito</h1>
                <div className="empty-cart-container">
                    <h3>El Carrito está vacío</h3>
                    <Link className="back-to-store-btn" to={'/'}>Volver a la Tienda</Link>
                </div>
                
            </div>
        )    
    }

}

export default Cart; 