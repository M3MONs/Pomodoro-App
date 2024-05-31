import React, { Suspense } from "react";
import MainWrapper from "./Main.style";

const LazyBackground = React.lazy(() => import("./Background"));

const Main = ({ children }) => {
    return (
        <MainWrapper>
            <Suspense>
                <LazyBackground />
            </Suspense>
            {children}
        </MainWrapper>
    );
};

export default Main;
