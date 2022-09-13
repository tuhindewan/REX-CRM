export default function ContactCards(props) {
  return (
    <div className="single-card">
      <div className="image-title">
        <span className="card-icon">{props.source}</span>
        <p>{props.cardTitle}</p>
      </div>
      <h3 className="total-contact-numbers">{props.totalAmount}</h3>
    </div>
  );
}
