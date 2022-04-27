import "./card.styles.css"

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <div className="card" key={id}>
            <img className="card-image" src={`https://robohash.org/${id}?set=set2`} alt={`monster ${id}`} />
            <h1 className="card-h1">{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Card;