import { calculateCardValues } from "../../utility/cards.utility";
import "./CardDisplays.css";

const CardDisplay = (props) => {
  const { card } = props;
  const { color, valueDisplay, suitDisplay } = card;

  return (
    <div className="card-display">
      {valueDisplay}
      <span style={{ color }}>{suitDisplay}</span>
    </div>
  );
};

const CardDisplays = (props) => {
  const { cards } = props;

  const handValue = calculateCardValues(cards);
  return (
    <>
      {cards.map((card) => (
        <CardDisplay key={card.id} card={card} />
      ))}{" "}
      = {handValue}
    </>
  );
};

export default CardDisplays;
