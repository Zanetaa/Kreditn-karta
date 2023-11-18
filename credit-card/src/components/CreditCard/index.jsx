import { useState, useEffect, useRef } from 'react';

const CreditCard = () => {
  const [cardInputVisible, setCardIinputVisible] = useState(false);

  const cardInputRef = useRef();

  const handleCredit = () => setCardIinputVisible(true);

  useEffect(() => {
    if (cardInputVisible) {
      cardInputRef.current.focus();
    }
  }, [cardInputVisible]);

  return (
    <div className="kreditka">
      <h2>Zadejte číslo své kreditní karty</h2>
      <button onClick={handleCredit}>Zadat číslo</button>
      {cardInputVisible ? <input type="text" ref={cardInputRef} /> : null}
    </div>
  );
};

export default CreditCard;
