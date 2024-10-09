import "./App.css";
import Sidebar from "./components/Sidebar";
import Test3D from "./components/Test3D";
import BooksScreen from "./screens/BooksScreen";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BooksScreen />
      {/* <Test3D /> */}
    </div>
  );
}

export default App;
