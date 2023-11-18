import { useState, useEffect, useRef } from 'react';
import './style.css';

const CreditCard = () => {
  const [cardInputVisible, setCardIinputVisible] = useState(false);

  const cardInputRef = useRef();
  const cardSecondRef = useRef();
  const cardThirdRef = useRef();
  const cardFourthRef = useRef();

  const handleCredit = () => setCardIinputVisible(true);

  const handleInput = (event) => {
    if (event.target.value.length == 4) {
      cardSecondRef.current.focus();
    }
  };

  const handleSecond = (event) => {
    if (event.target.value.length == 4) {
      cardThirdRef.current.focus();
    }
  };

  const handleThird = (event) => {
    if (event.target.value.length == 4) {
      cardFourthRef.current.focus();
    }
  };

  useEffect(() => {
    if (cardInputVisible) {
      cardInputRef.current.focus();
    }
  }, [cardInputVisible]);

  return (
    <div className="kreditka">
      <h2>Zadejte číslo své kreditní karty</h2>
      <button className="button" onClick={handleCredit}>
        Zadat číslo
      </button>
      {cardInputVisible ? (
        <input
          key="1"
          className="color-panel"
          type="text"
          minLength="4"
          maxLength="4"
          ref={cardInputRef}
          onChange={handleInput}
        />
      ) : null}
      {cardInputVisible ? (
        <input
          key="2"
          className="color-panel"
          type="text"
          minLength="4"
          maxLength="4"
          ref={cardSecondRef}
          onChange={handleSecond}
        />
      ) : null}
      {cardInputVisible ? (
        <input
          key="3"
          className="color-panel"
          type="text"
          minLength="4"
          maxLength="4"
          ref={cardThirdRef}
          onChange={handleThird}
        />
      ) : null}
      {cardInputVisible ? (
        <input
          key="4"
          className="color-panel"
          type="text"
          minLength="4"
          maxLength="4"
          ref={cardFourthRef}
        />
      ) : null}
    </div>
  );
};

export default CreditCard;
