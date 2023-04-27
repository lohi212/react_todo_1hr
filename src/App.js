import "./App.css";
import NestedComments from "./components/NestedComments";
import TicTacToe from "./components/TicTacToe";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="root-container">
      {/* <TicTacToe /> */}
      {/* <Todo /> */}
      <NestedComments />
    </div>
  );
}

export default App;
