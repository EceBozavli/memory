import './App.css'

import { useEffect, useState } from 'react'

import Card from './card';

const defaultCards = [
  {
    id: crypto.randomUUID(),
    name: "bottle",
    path: "./public/img/bottle.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "capa",
    path: "./public/img/capa.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "futbol",
    path: "./public/img/futbol.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "hand-spock",
    path: "./public/img/hand-spock.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "car",
    path: "./public/img/car.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "moon",
    path: "./public/img/moon.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "snowflake",
    path: "./public/img/snowflake.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "sun",
    path: "./public/img/sun.svg",
    isShow: false,
    matched: false
  },{
    id: crypto.randomUUID(),
    name: "bottle",
    path: "./public/img/bottle.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "capa",
    path: "./public/img/capa.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "futbol",
    path: "./public/img/futbol.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "hand-spock",
    path: "./public/img/hand-spock.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "car",
    path: "./public/img/car.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "moon",
    path: "./public/img/moon.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "snowflake",
    path: "./public/img/snowflake.svg",
    isShow: false,
    matched: false
  },
  {
    id: crypto.randomUUID(),
    name: "sun",
    path: "./public/img/sun.svg",
    isShow: false,
    matched: false
  }
];

function App() {
  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false); //seçilir mi seçilemez mi kapalı mı açık mı için kullandım
  const [moves, setMoves] = useState(0); //hamle sayısı

  //oyunu yeniden başlat:
  const prepeareCards = () => {
    setCards(defaultCards.sort(() => Math.random() - 0.5));
    resetState();
  };


  const newGame = () => {
    cards.map(x => {
      x.matched = false,
      x.isShow = false
    })
    setCards(cards.sort(() => Math.random() - 0.5));
    resetState();
    setMoves(0);
  }

  const handleSelected = (card) => {
    if (disabled) return true;
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card)
    cards.find(x => x.id === card.id).isShow = true;
    setCards([...cards]);
  };

  useEffect(() => {
    prepeareCards();
  }, []);

  useEffect(() => {
    if(selectedOne && selectedTwo) {
      setDisabled(true);
      setMoves(moves + 1);
      if(selectedOne.name === selectedTwo.name) { //kartlar birbirine eşitse
        cards.find(x => x.id === selectedOne.id).matched = true;
        cards.find(x => x.id === selectedTwo.id).matched = true;
        setCards([...cards]);
        resetState();
      } else { //kartlar birbirine eşit değilse 1sn sonra işlem yaptırır
        setTimeout(() => {
          cards.find(x => x.id === selectedOne.id).isShow = false;
          cards.find(x => x.id === selectedTwo.id).isShow = false;
          resetState();
        }, 1500);
      }
    }
  }, [selectedOne, selectedTwo]); //kartların herhangi birinde seçim yapıldığında oynama yapacak

  const resetState = () => {
    setSelectedOne(null);
    setSelectedTwo(null);
    setDisabled(false);
  }

  return (
    <section>
      <div className="header">
        <h1 className='gameName'>memory</h1>
        <div className="BtnArea">
          <button className='RestartBtn' onClick={newGame}>Restart</button>
          <button className='NewGameBtn' onClick={newGame}>New Game</button>
        </div>
      </div>

      <div className='TotalCards'>
          {cards.map((card) => (
            <Card 
              card = {card} 
              key={card.id} 
              handleSelected = {handleSelected} 
              disabled={disabled}
            />
          ))}
      </div>
      
      <div className='Moves'>
        <p>Player 1: <span>{moves}</span></p>
      </div>  
    </section>
  )
}

export default App
