import { CartPage, Header } from "./styles"
import { LuShoppingBag } from "react-icons/lu";
import { ButtonCart } from "./styles";
import CartProduct from "../../components/CartProduct";
import { useCart } from "../../contexts/CartContext";

function Cart() {
    const { cart } = useCart();

    return (
        <CartPage>
            <Header>
                <h1>legaltest</h1>
                <ButtonCart>
                    <LuShoppingBag />
                    <p>Carrinho({cart.length})</p>
                </ButtonCart>
            </Header>
            <CartProduct />
        </CartPage>
    )
}

export default Cart;
