import logo from './logo.svg';
import './App.css';
import AboutPage from "./pages/about/AboutPage";
import MainPage from "./pages/main/MainPage";
import TodosPage from "./pages/todos/TodosPage";

function App() {
  return (
    <div className="App">
      <AboutPage/>
      <MainPage/>
      <TodosPage/>
    </div>
  );
}

export default App;
