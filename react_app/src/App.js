import Footer from "components/molecules/Footer/Footer";
import PomodoroClock from "components/organisms/PomodoroClock/PomodoroClock";
import PomodoroContent from "components/molecules/PomodoroContent/PomodoroContent";
import TodoBoard from "components/organisms/TodoBoard/TodoBoard";
import YoutubeVideo from "components/molecules/YoutubeVideo/YoutubeVideo";
import { BoardProvider } from "context/TodoBoardContext";

const { default: Main } = require("components/pages/Main/Main");

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
