import Price from "@/Components/PriceFormatter.jsx";
import RatingForProducts from "@/Components/RatingForProducts.jsx";

export default function ProductBlock(props) {

    return (
        <>
            <div className="product-block">
                <div className="images">
                    <img src={'/img/products/' + props.picture} alt=""/>
                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                </div>
                <h1>{props.title}</h1>
                <div className="rating">
                    <RatingForProducts rating={props.rating} count={props.count} />
                </div>
                <p>В наличии</p>
                <div className="prices">
                    <h2 className="price"><Price value={props.newPrice ? props.newPrice : props.price}/></h2>
                    {props.newPrice && <div className="sale">
                        <h3><strike><Price value={props.price}/></strike></h3>
                        <h4>-{Math.round((props.price - props.newPrice) / props.price * 100)}%</h4>
                    </div>}
                </div>
                <a href="/card">
                    <button>Подробнее</button>
                </a>
            </div>
        </>
    )
}
