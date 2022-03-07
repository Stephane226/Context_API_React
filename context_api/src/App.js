import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';  
import BookList from './components/booklist';
import ThemeContextProvider from './context/themeContext'; 
import ToogleBtn from './components/toogleBtn';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          
            <Navbar/>
            <BookList/>
            <ToogleBtn/>

      </ThemeContextProvider>     
    </div>
  );
}

export default App;
