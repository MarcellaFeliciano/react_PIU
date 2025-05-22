

import "./Card.css";

export default function Card({ title, img }) {
    return (
        <div className="card">
            <figure>
                <img src={img} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </div>
    );
}