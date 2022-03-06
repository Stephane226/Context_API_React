import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';  
import BookList from './components/booklist';
import ThemeContextProvider from './context/themeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          
            <Navbar/>
            <BookList/>

      </ThemeContextProvider>     
    </div>
  );
}

export default App;
