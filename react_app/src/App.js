import Footer from "components/Footer/Footer";
import PomodoroClock from "components/PomodoroClock/PomodoroClock";
import PomodoroContent from "components/PomodoroContent/PomodoroContent";
import YoutubeEmbed from "components/YoutubeEmbed/YoutubeEmbed";

const { default: Main } = require("components/Main/Main");

function App() {
  return (
    <Main>
      <PomodoroContent>
        <PomodoroClock />
        <YoutubeEmbed />
      </PomodoroContent>
      <Footer />
    </Main>
  );
}

export default App;
