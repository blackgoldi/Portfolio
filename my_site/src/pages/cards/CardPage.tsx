import { useState } from 'react';
import './CardPage.css';
import { useNavigate } from 'react-router-dom';

export default function CardPage() {
  const [openCard, setOpenCard] = useState('');
  const [style, setStyle] = useState('default');
  const navigator = useNavigate();

  const [cards, setCards] = useState([
    { id: 1, path: '/', name: 'Домашняя страница' },
    { id: 2, path: '/soon', name: 'Скоро' },
  ]);

  function handleAddCard(e) {
    console.log(e);
    const newCards = [...cards];
    newCards.push({ id: cards.length + 1, path: 'Карточка' });
    setCards(newCards);
  }

  function handleResetCard(e) {
    console.log(e);
    setCards([]);
  }

  function handleDragStart(e) {
    e.target.classList.add('selected');
  }

  function handleDragEnd(e, path) {
    e.stopPropagation();
    e.target.classList.remove('selected');
    navigator(path);
  }

  function handleDragOver(e: { preventDefault: () => void }) {
    e.preventDefault();
    const selected = document.querySelector('.selected');
    if (selected) {
      setOpenCard(selected.children[0]?.textContent ?? '');
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
    setStyle(e.target.getAttribute('value'));
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <div>
          <input id="default" type="radio" name="default" value="default" checked={style == 'default'} onChange={handleStyleChange} />
          <label htmlFor="default"> Без стиля</label>
        </div>
        <div>
          <input id="goldenApple" type="radio" name="goldenApple" value="goldenApple" checked={style == 'goldenApple'} onChange={handleStyleChange} />
          <label htmlFor="goldenApple"> Золотое яблоко</label>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '5vh' }}>
        <div className={`pedestal ${style}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
          {openCard ? (
            <div draggable={true} onDragStart={handleStartDragFromPedestal} onDragEnd={handleDragFromPedestal}>
              <p>{openCard}</p>
            </div>
          ) : null}
        </div>
        <div className="hand">
          {cards.map((c, index) => (
            <div
              key={c.path}
              className={`card ${style}`}
              draggable={true}
              style={{ left: index * 200 }}
              // style={{ left: (index * 50) / cards.length, transform: `rotate(${index * (multiply * 2)}deg)  translate(${index * (multiply * 2)}px, ${index * (multiply * 3)}px)` }}
              onDragStart={handleDragStart}
              onDragEnd={(e) => handleDragEnd(e, c.path)}
            >
              <p>{c.name}</p>
            </div>
          ))}
        </div>
        {/* <p style={{ margin: '0 auto' }}>На руке {cards.length} карт</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button className="btn" onClick={handleAddCard}>
            Добавить карту
          </button>
          <button className="btn" onClick={handleResetCard}>
            Сбросить руку
          </button>
        </div> */}
      </div>
    </div>
  );
}
