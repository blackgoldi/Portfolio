type CardProps = {
  id: number;
  context: string;
  selected: boolean;
  handLength: number;
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

export function Card({ id, context, selected, handLength, onDragStart, onDragEnd }: CardProps) {
  const multiply = 2;
  return (
    <div
      key={id}
      className={`card ${selected}`}
      draggable={true}
      style={{ left: (id * 50) / handLength, transform: `rotate(${id * (multiply * 2)}deg)  translate(${id * (multiply * 2)}px, ${id * (multiply * 3)}px)` }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <p>
        {context} № {id}
      </p>
    </div>
  );
}
