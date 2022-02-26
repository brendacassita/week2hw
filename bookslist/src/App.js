import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{border:'5px solid black', margin:'10px', padding:'10px'}}>
      <h1>Books App</h1>
      <nav
        style={{
          border:'2px solid hotpink', padding: '10px', margin: '50px'
        }}
        >
        <Link to='/about'>About</Link> - {' '}
        <Link to='/bookslist'>Books</Link> - {' '}
        <Link to='newbooks'>Add New Books</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
