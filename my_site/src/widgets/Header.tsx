import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav
      style={{
        width: '100%',
        borderBottom: '1px solid yellow',
        height: '5vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        listStyle: 'none',
      }}
    >
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/cards'}>Cards</Link>
      </li>
      <li>
        <Link to={'/soon'}>Soon</Link>
      </li>
    </nav>
  );
}
