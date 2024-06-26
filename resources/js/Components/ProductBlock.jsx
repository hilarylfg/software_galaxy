import Price from "@/Components/PriceFormatter.jsx";

export default function ProductBlock(props) {

    return (
        <>
            <div className="product-block">
                <div className="images">
                    <img src="/img/products/product.png" alt=""/>
                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                </div>
                <h1>{props.title}</h1>
                <p>В наличии</p>
                <div className="prices">
                    <h2 className="price"><Price value={props.newPrice ? props.newPrice : props.price}/></h2>
                    {props.newPrice && <div className="sale">
                        <h3><strike><Price value={props.price}/></strike></h3>
                        <h4>-{Math.round((props.price - props.newPrice) / props.price * 100)}%</h4>
                    </div>}
                </div>
                <button>Подробнее</button>
            </div>
        </>
    )
}
