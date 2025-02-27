import "./card.css";

interface CardProps{
    title : string,
    image : string,
    price : number

}

export function Card({title, image, price} : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h3>{title}</h3>
            <p><b>R$ </b>{price}</p>
        </div>
    )
}