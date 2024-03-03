import Footer from "components/Footer/Footer";
import PomodoroClock from "components/PomodoroClock/PomodoroClock";
import PomodoroContent from "components/PomodoroContent/PomodoroContent";
import TodoBoard from "components/TodoBoard/TodoBoard";
import YoutubeEmbed from "components/YoutubeEmbed/YoutubeEmbed";
import { BoardProvider } from "context/TodoBoardContext";

const { default: Main } = require("components/Main/Main");

function App() {
  return (
    <Main>
      <PomodoroContent>
        <PomodoroClock />
        <YoutubeEmbed />
        <BoardProvider>
          <TodoBoard />
        </BoardProvider>
      </PomodoroContent>
      <Footer />
    </Main>
  );
}

export default App;
