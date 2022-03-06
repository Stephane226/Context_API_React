import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';  
import BookList from './components/booklist';

function App() {
  return (
    <div className="App">
 <Navbar/>
 <BookList/>
    </div>
  );
}

export default App;
