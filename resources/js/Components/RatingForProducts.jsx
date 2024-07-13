export default function RatingForProducts({rating = 0, count = 0}) {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const fullStarImg = '<img src="/img/star-fill.svg" alt="Полная звезда">';
    const halfStarImg = '<img src="/img/star-half-fill.svg" alt="Половина звезды">';
    const emptyStarImg = '<img src="/img/star-not-fill.svg" alt="Пустая звезда">';

    let stars = "";
    for (let i = 0; i < fullStars; i++) {
        stars += fullStarImg;
    }

    if (hasHalfStar) {
        stars += halfStarImg;
    }

    for (let i = 0; i < emptyStars; i++) {
        stars += emptyStarImg;
    }

    return (
        <>
            <div className="rating">
                <div className="stars" dangerouslySetInnerHTML={{__html: stars}}/>
                <span>{count} оценок</span>
            </div>
        </>
    )
}
