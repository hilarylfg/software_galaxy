import Price from "@/Components/PriceFormatter.jsx";
import RatingForProducts from "@/Components/RatingForProducts.jsx";

export default function ProductBlock({ product }) {

    const availabilityClass = product.available === 'Есть в наличии' ? 'in-stock' : 'not-in-stock';

    return (
        <>
            <div className="product-block">
                <div className="images">
                    <img src={'/img/products/' + product.picture} alt=""/>
                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                </div>
                <h1>{product.title}</h1>
                <div className="rating">
                    <RatingForProducts rating={product.rating} count={product.count} />
                </div>
                <p className={availabilityClass}>{product.available}</p>
                <div className="prices">
                    <h2 className="price"><Price value={product.newPrice ? product.newPrice : product.price}/></h2>
                    {product.newPrice && <div className="sale">
                        <h3><strike><Price value={product.price}/></strike></h3>
                        <h4>-{Math.round((product.price - product.newPrice) / product.price * 100)}%</h4>
                    </div>}
                </div>
                <a href="/card">
                    <button className={availabilityClass}>{product.available === 'Есть в наличии' ? 'Подробнее' : 'Сообщить о поступлении'}</button>
                </a>
            </div>
        </>
    )
}
