import { lazy, Suspense } from "react";
import { Spin } from "antd";
import BoardNote from "components/molecules/BoardNote/BoardNote";
import Footer from "components/molecules/Footer/Footer";
import PomodoroContent from "components/molecules/PomodoroContent/PomodoroContent";
import Main from "components/pages/Main/Main";
import { BoardProvider } from "context/TodoBoardContext";

const LazyPomodoroClock = lazy(() => import("components/organisms/PomodoroClock/PomodoroClock"));

const LazyYoutubeEmbed = lazy(() => import("components/molecules/YoutubeVideo/YoutubeVideo"));

const LazyTodoBoard = lazy(() => import("components/organisms/TodoBoard/TodoBoard"));

function App() {
    return (
        <Main>
            <PomodoroContent>
                <Suspense fallback={<Spin />}>
                    <LazyPomodoroClock />
                    <LazyYoutubeEmbed />
                    <BoardProvider>
                        <LazyTodoBoard />
                    </BoardProvider>
                    <BoardNote />
                </Suspense>
            </PomodoroContent>
            <Footer />
        </Main>
    );
}

export default App;
