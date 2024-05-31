import React, { Suspense, useState } from 'react'
import Cookies from 'js-cookie';
import YoutubeWrapper from './YoutubeVideo.style'
import { Input, Skeleton } from 'antd'
import { extractVideoId, opts } from '../../utils/YoutubeEmbed.utils'

const LazyYoutubeEmbed = React.lazy(() => import('react-youtube'))

const YoutubeEmbed = () => {
    const [videoLink, setVideoLink] = useState(Cookies.get('videoLink') || 'mmKguZohAck');
    const [userInputLink, setUserInputLink] = useState('')

    const handleEnterLink = (e) => {
        if (e.key === 'Enter') {
            const videoId = extractVideoId(userInputLink)
            Cookies.set('videoLink', videoId, { expires: 7 });
            setVideoLink(videoId)
            setUserInputLink('')
        }
    }

    return (
        <YoutubeWrapper>
            <Suspense fallback={<Skeleton.Image active={true} style={{ width: '450px', height: '220px' }} />}>
                <LazyYoutubeEmbed opts={opts} videoId={videoLink} />
            </Suspense>
            <Input placeholder='Enter YT video link' onChange={(e) => setUserInputLink(e.target.value)} onKeyDown={handleEnterLink} />
        </YoutubeWrapper>
    )
}

export default YoutubeEmbed