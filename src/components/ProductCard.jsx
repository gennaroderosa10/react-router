import { Link } from "react-router-dom"


export default function ProductCard({ product }) {
    return (
        <div className="card col-3 " >
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                    {product.description}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.category}</li>
                <li className="list-group-item">{product.price} €</li>
                <li>
                    <Link to={`/prodotti/${product.id}`}>vedi dettagli</Link>
                </li>
            </ul>
        </div>
    );
}