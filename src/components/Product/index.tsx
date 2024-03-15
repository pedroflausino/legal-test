import { useState } from 'react';
import { DescProduct, DivProduct, DivPrice, Container } from "./styles";
import { LuShoppingBag } from "react-icons/lu";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../contexts/CartContext';
import productsData from '../../database/products.json';

function Product({ searchText }: { searchText: string }) {
    const [showPriceMap, setShowPriceMap] = useState<{[key: number]: boolean}>({});
    const { cart, addToCart: addToGlobalCart } = useCart();

    const toggleShowPrice = (id: number) => {
        setShowPriceMap(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const addToCart = (productId: number) => {
        if (cart.includes(productId)) {
            toast.warning('Este produto já está no carrinho!');
        } else {
            addToGlobalCart(productId);
            toast.success('Produto adicionado ao carrinho!');
        }
    };

    const filteredProducts = searchText.trim() === '' ? productsData.products : productsData.products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Container>
            {filteredProducts.map((product) => (
                <DivProduct key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <DescProduct>
                        <p>{product.title}</p>
                        <DivPrice
                            onMouseEnter={() => toggleShowPrice(product.id)}
                            onMouseLeave={() => toggleShowPrice(product.id)}
                            onClick={() => addToCart(product.id)}
                        >
                            {!showPriceMap[product.id] ? (
                                <>
                                    R${product.price}
                                </>
                            ) : (
                                <LuShoppingBag size={20} />
                            )}
                        </DivPrice>
                    </DescProduct>
                </DivProduct>
            ))}
        </Container>
    );
}

export default Product;
