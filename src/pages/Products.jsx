import axios from "axios";
import { useState, useEffect } from 'react';


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
                        <div className="card col-3 g-3" key={prodotto.id}>
                            <img src={prodotto.image} className="card-img-top" alt={prodotto.title} />
                            <div className="card-body">
                                <h5 className="card-title">{prodotto.title}</h5>
                                <p className="card-text">
                                    {prodotto.description}
                                </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{prodotto.category}</li>
                                <li className="list-group-item">{prodotto.price}</li>
                            </ul>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}