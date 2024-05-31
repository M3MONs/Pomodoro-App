import { lazy, Suspense } from "react";
import BoardNote from "components/molecules/BoardNote/BoardNote";
import Footer from "components/molecules/Footer/Footer";
import { BoardProvider } from "context/TodoBoardContext";
import LoadingSpin from "components/atoms/LoadingSpin";

const LazyMain = lazy(() => import("components/pages/Main/Main"));

const LazyPomodoroContent = lazy(() =>
    import("components/molecules/PomodoroContent/PomodoroContent")
);

const LazyPomodoroClock = lazy(() => import("components/organisms/PomodoroClock/PomodoroClock"));

const LazyYoutubeEmbed = lazy(() => import("components/molecules/YoutubeVideo/YoutubeVideo"));

const LazyTodoBoard = lazy(() => import("components/organisms/TodoBoard/TodoBoard"));

function App() {
    return (
        <Suspense fallback={<LoadingSpin />}>
            <LazyMain>
                <LazyPomodoroContent>
                    <LazyPomodoroClock />
                    <LazyYoutubeEmbed />
                    <BoardProvider>
                        <LazyTodoBoard />
                    </BoardProvider>
                    <BoardNote />
                </LazyPomodoroContent>
                <Footer />
            </LazyMain>
        </Suspense>
    );
}

export default App;
