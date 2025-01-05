import React from "react"

const Card = ({ card, handleSelected, disabled }) => {
  const handleClick = () => {
    if(!disabled) {
      handleSelected(card)
    }
  }
  return (
    <div className="cardsSection">
      <div className={ "card-item" + (card.matched ? " passive" : card.isShow ? " active" : "")}>
        {
          (card.matched || card.isShow) ? 
          <img src={card.path} className="InnerCard" />
          :
          <img onClick={handleClick} src="./kapak/kapak.svg" className="UpperCard" />
        }
      </div>
    </div>
  );
};

export default Card;

