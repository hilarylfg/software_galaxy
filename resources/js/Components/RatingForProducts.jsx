export default function RatingForProducts({rating, comments}) {

    if (rating || comments === 0) {
        return null
    }

    return (
        <>
            {rating || comments && <div className="rating">
                <img src="/img/star.svg" alt=""/>
                <span>{rating}</span>
                <img src="/img/comment.svg" alt=""/>
                <span>{comments}</span>
            </div>}
        </>
    )
}
