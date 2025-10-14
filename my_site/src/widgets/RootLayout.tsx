import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function RootLayout() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Header />
      <Outlet />
    </div>
  );
}
