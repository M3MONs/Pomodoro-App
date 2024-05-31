import React, { useState, Suspense } from "react";
import Cookies from "js-cookie";
import YoutubeWrapper, { YoutubeContentWrapper } from "./YoutubeVideo.style";
import { Input, Spin } from "antd";
import { extractVideoId, opts } from "../../utils/YoutubeEmbed.utils";

const LazyYouTube = React.lazy(() => import("react-youtube"));

const YoutubeEmbed = () => {
    const [videoLink, setVideoLink] = useState(Cookies.get("videoLink") || "mmKguZohAck");
    const [userInputLink, setUserInputLink] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleEnterLink = (e) => {
        if (e.key === "Enter") {
            const videoId = extractVideoId(userInputLink);
            Cookies.set("videoLink", videoId, { expires: 7 });
            setVideoLink(videoId);
            setUserInputLink("");
        }
    };

    return (
        <YoutubeWrapper>
            <YoutubeContentWrapper>
                {isLoading && <Spin />}
                <Suspense fallback={<div />}>
                    <LazyYouTube
                        opts={opts}
                        videoId={videoLink}
                        className={isLoading ? "hide" : "content"}
                        onReady={() => setIsLoading(false)}
                    />
                </Suspense>
            </YoutubeContentWrapper>
            <Input
                placeholder='Enter YT video link'
                onChange={(e) => setUserInputLink(e.target.value)}
                onKeyDown={handleEnterLink}
            />
        </YoutubeWrapper>
    );
};

export default YoutubeEmbed;
