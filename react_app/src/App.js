import BoardNote from "components/molecules/BoardNote/BoardNote";
import Footer from "components/molecules/Footer/Footer";
import PomodoroContent from "components/molecules/PomodoroContent/PomodoroContent";
import YoutubeEmbed from "components/molecules/YoutubeVideo/YoutubeVideo";
import PomodoroClock from "components/organisms/PomodoroClock/PomodoroClock";
import TodoBoard from "components/organisms/TodoBoard/TodoBoard";
import Main from "components/pages/Main/Main";
import { BoardProvider } from "context/TodoBoardContext";

function App() {
  return (
    <Main>
      <PomodoroContent>
        <PomodoroClock />
        <YoutubeEmbed />
        <BoardProvider>
          <TodoBoard />
        </BoardProvider>
        <BoardNote />
      </PomodoroContent>
      <Footer />
    </Main>
  );
}

export default App;
