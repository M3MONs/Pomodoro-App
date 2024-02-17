import Footer from "components/Footer/Footer";
import PomodoroClock from "components/PomodoroClock/PomodoroClock";
import PomodoroContent from "components/PomodoroContent/PomodoroContent";

const { default: Main } = require("components/Main/Main");

function App() {
  return (
    <Main>
      <PomodoroContent>
        <PomodoroClock />
      </PomodoroContent>
      <Footer />
    </Main>
  );
}

export default App;
