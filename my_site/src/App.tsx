import { useState } from "react";
import "./App.css";

function App() {
  const [multiply, setMultiply] = useState(0.45);
  const [openCard, setOpenCard] = useState("");
  const [style, setStyle] = useState("default");

  const [cards, setCards] = useState([
    { id: 1, value: "Карточка" },
    { id: 2, value: "Карточка" },
    { id: 3, value: "Карточка" },
    { id: 4, value: "Карточка" },
    { id: 6, value: "Карточка" },
    { id: 7, value: "Карточка" },
    { id: 8, value: "Карточка" },
    { id: 9, value: "Карточка" },
    { id: 10, value: "Карточка" },
    { id: 11, value: "Карточка" },
    { id: 12, value: "Карточка" },
    { id: 13, value: "Карточка" },
    { id: 14, value: "Карточка" },
    { id: 15, value: "Карточка" },
    { id: 16, value: "Карточка" },
  ]);

  // useEffect(() => {
  //   const arr = [];
  //   for (let i = 0; i < 501; i++) {
  //     arr.push({ id: i + 1, value: "Карточка" });
  //   }
  //   setCards(arr);
  // }, []);

  function handleAddCard(e) {
    console.log(e);
    const newCards = [...cards];
    newCards.push({ id: cards.length + 1, value: "Карточка" });
    setCards(newCards);
  }

  function handleResetCard(e) {
    console.log(e, 123);
    setCards([]);
  }

  function handleRangeChange(e) {
    setMultiply(e.target.value);
  }

  function handleDragStart(e) {
    e.target.classList.add("selected");
  }

  function handleDragEnd(e) {
    e.stopPropagation();
    e.target.classList.remove("selected");
  }

  function handleDragOver(e: { preventDefault: () => void }) {
    e.preventDefault();
    const selected = document.querySelector(".selected");
    if (selected) {
      setOpenCard(selected.children[0]?.textContent ?? "");
    }
  }

  function handleStartDragFromPedestal(e) {
    console.log(e.target);
  }

  function handleDragFromPedestal(e) {
    console.log(e);
  }

  function handleDragLeave(e) {
    console.log(e);
  }

  function handleStyleChange(e) {
    setStyle(e.target.getAttribute("value"));
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <div>
          <input
            type="radio"
            id="default"
            name="default"
            value="default"
            checked={style == "default"}
            onChange={handleStyleChange}
          />
          <label htmlFor="default"> Без стиля</label>
        </div>
        <div>
          <input
            type="radio"
            id="goldenApple"
            name="goldenApple"
            value="goldenApple"
            checked={style == "goldenApple"}
            onChange={handleStyleChange}
          />
          <label htmlFor="goldenApple"> Золотое яблоко</label>
        </div>
      </div>
      <div
        className={`pedestal ${style}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {openCard ? (
          <div
            draggable={true}
            onDragStart={handleStartDragFromPedestal}
            onDragEnd={handleDragFromPedestal}
          >
            <p>{openCard}</p>
          </div>
        ) : null}
      </div>
      <p>На руке {cards.length} карт</p>
      <div className="hand">
        {cards.map((c, index) => (
          <div
            key={c.id}
            className={`card ${style}`}
            draggable={true}
            style={{
              left: (index * 50) / cards.length,
              transform: `rotate(${index * (multiply * 2)}deg) 
              translate(${index * (multiply * 2)}px, ${
                index * (multiply * 3)
              }px)`,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <p>
              {c.value} № {c.id}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button className="btn" onClick={handleAddCard}>
          Добавить карту
        </button>
        <button className="btn" onClick={handleResetCard}>
          Сбросить руку
        </button>
      </div>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <p>{multiply}</p>
        <input
          type="range"
          onChange={handleRangeChange}
          value={multiply}
          step={0.1}
        />
      </div>
    </>
  );
}

export default App;
