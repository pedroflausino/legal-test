import { useState } from 'react';
import { HomePage, Input, Header, TitleInput, ButtonCart } from "./styles"
import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import Product from "../../components/Product";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

function Home() {
    const [searchText, setSearchText] = useState<string>('');
    const { cart } = useCart();

    return (
        <HomePage>
            <Header>
                <TitleInput>
                    <h1>legaltest</h1>
                    <Input>
                        <FiSearch />
                        <input
                            type="text"
                            placeholder="pesquise"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </Input>
                </TitleInput>
                <Link to={'/cart'}>
                    <ButtonCart>
                        <LuShoppingBag />
                        <p>Carrinho({cart.length})</p>
                    </ButtonCart>
                </Link>
            </Header>
            <Product searchText={searchText} />
        </HomePage>
    );
}

export default Home;
