import "./App.css";
import Sidebar from "./components/Sidebar";
import BooksScreen from "./screens/BooksScreen";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BooksScreen />
    </div>
  );
}

export default App;
