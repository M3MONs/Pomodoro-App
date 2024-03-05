import Footer from "components/Footer/Footer";
import PomodoroClock from "components/PomodoroClock/PomodoroClock";
import PomodoroContent from "components/PomodoroContent/PomodoroContent";
import TodoBoard from "components/TodoBoard/TodoBoard";
import YoutubeVideo from "components/YoutubeVideo/YoutubeVideo";
import { BoardProvider } from "context/TodoBoardContext";

const { default: Main } = require("components/Main/Main");

function App() {
  return (
    <Main>
      <PomodoroContent>
        <PomodoroClock />
        <YoutubeVideo />
        <BoardProvider>
          <TodoBoard />
        </BoardProvider>
      </PomodoroContent>
      <Footer />
    </Main>
  );
}

export default App;
