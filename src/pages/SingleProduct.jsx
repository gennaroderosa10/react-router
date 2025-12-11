import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                if (resp.data) {
                    setProduct(resp.data);
                } else {
                    navigate("/prodotti");
                }

            })

    }, [id, navigate]);

    return (
        <>

            {product !== null && (
                <>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                </>
            )}


        </>
    );
}