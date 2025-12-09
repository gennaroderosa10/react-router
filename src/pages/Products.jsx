import axios from "axios";
import { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";


export default function Products() {
    const [prodotti, setProdotti] = useState([])

    function fetchProdotti() {
        axios
            .get(` https://fakestoreapi.com/products`)
            .then((resp) => {
                setProdotti(resp.data)
            })
    };

    useEffect(() => {
        fetchProdotti();
    }, []);

    return (
        <div className="containet mt-4">
            <div className="row">
                {prodotti.map((prodotto) => {

                    return (
                        <ProductCard
                            key={prodotto.id}
                            image={prodotto.image}
                            title={prodotto.title}
                            description={prodotto.description}
                            category={prodotto.category}
                            price={prodotto.price}
                        />
                    )

                })}
            </div>
        </div>
    )
}