import axios from "axios";
import { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";


export default function Products() {
    const [prodotti, setProdotti] = useState([])

    function fetchProdotti() {
        axios
            .get(`https://fakestoreapi.com/products`)
            .then((resp) => {
                setProdotti(resp.data)
            })
    };

    useEffect(() => {
        fetchProdotti();
    }, []);

    return (
        <div className="containet mt-4">
            <div className="row row-cols-1 g-5">
                {prodotti.map((prodotto) => {

                    return (
                        <ProductCard
                            key={prodotto.id}
                            product={prodotto}
                        />
                    )

                })}
            </div>
        </div>
    )
}