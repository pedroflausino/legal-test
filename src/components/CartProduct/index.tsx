import { useState, useEffect } from 'react';
import { Container, Products, Product, Infos, Price, Total, TotalPrice } from "./styles";
import { FaTrash } from "react-icons/fa";
import productsData from '../../database/products.json';
import { useCart } from "../../contexts/CartContext";
import { EmptyCartMessage } from "./styles";
import DeleteProductConfirmationModal from '../../popUps/DeleteProductConfirmationModal';
import DeleteConfirmationModal from '../../popUps/DeleteConfimationModal';

function CartProduct() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [cartProducts, setCartProducts] = useState<Array<{ id: number; title: string; price: number; image: string }>>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const productsInCart = cart.map(productId => {
      const product = productsData.products.find(product => product.id === productId);
      if (!product) {
        throw new Error(`Produto com ID ${productId} não encontrado.`);
      }
      return product;
    });
    setCartProducts(productsInCart);
  }, [cart]);

  useEffect(() => {
    const total = cartProducts.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(total);
  }, [cartProducts]);

  const handleDelete = (productName: string, productId: number) => {
    DeleteProductConfirmationModal({
      productName,
      onConfirmDelete: () => {
        removeFromCart(productId);
      }
    });
  };

  const handleDeleteAll = () => {
    if (cartProducts.length > 0) {
      DeleteConfirmationModal(() => {
        clearCart();
      });
    }
  };

  return (
    <Container>
      <span onClick={handleDeleteAll}>
        Remover todos os produtos
        <FaTrash/>
      </span>
      {cartProducts.length === 0 ? (
        <EmptyCartMessage>Seu carrinho está vazio</EmptyCartMessage>
      ) : (
        <Products>
          {cartProducts.map(product => (
            <Product key={product.id}>
              <img src={product.image} alt={product.title} />
              <Infos>
                <p>{product.title}</p>
                <Price>
                  <p>Preço a vista</p>
                  <span>R${product.price.toFixed(2)}</span>
                </Price>
              </Infos>
              <FaTrash onClick={() => handleDelete(product.title, product.id)} />
            </Product>
          ))}
          <Total>
            <p>Valor dos produtos:</p>
            <TotalPrice>
              <span>R${totalPrice.toFixed(2)}</span>
              <button>Finalizar Compra</button>
            </TotalPrice>
          </Total>
        </Products>
      )}
    </Container>
  );
}

export default CartProduct;
