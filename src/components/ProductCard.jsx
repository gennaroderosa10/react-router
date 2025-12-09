export default function ProductCard({ image, title, description, category, price }) {
    return (
        <div className="card col-3 g-3">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{category}</li>
                <li className="list-group-item">{price} €</li>
            </ul>
        </div>
    );
}