
export default function ContentPageReviews(props) {
    // ricaviamo con il props dati del map
    const {name,vote,text } = props.review

    return (
        <div className="card-vote">
            <span>{text}</span>
            <h4>Vote:{vote}</h4>
            <p>By{name}</p>
        </div>
    )
}
