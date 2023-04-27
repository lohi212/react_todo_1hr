import "./App.css";
import Carousel from "./components/Carousel";
import NestedComments from "./components/NestedComments";
import TicTacToe from "./components/TicTacToe";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="root-container">
      {/* <TicTacToe /> */}
      {/* <Todo /> */}
      {/* <NestedComments /> */}
      <Carousel />
    </div>
  );
}

export default App;
