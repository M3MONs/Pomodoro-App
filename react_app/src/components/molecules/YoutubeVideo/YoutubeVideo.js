import React, { useState } from 'react'
import Cookies from 'js-cookie';
import YoutubeWrapper from './YoutubeVideo.style'
import YouTube from 'react-youtube'
import { Input } from 'antd'
import { extractVideoId, opts } from '../../utils/YoutubeEmbed.utils'

const YoutubeEmbed = () => {
    const [videoLink, setVideoLink] = useState(Cookies.get('videoLink') || 'mmKguZohAck');
    const [userInputLink, setUserInputLink] = useState('')

    const handleEnterLink = (e) => {
        if (e.key === 'Enter') {
            const videoId = extractVideoId(userInputLink)
            setVideoLink(videoId)
            Cookies.set('videoLink', videoId, { expires: 7 });
            setUserInputLink('')
        }
    }

    return (
        <YoutubeWrapper>
            <YouTube opts={opts} videoId={videoLink} />
            <Input placeholder='Enter YT video link' onChange={(e) => setUserInputLink(e.target.value)} onKeyDown={handleEnterLink} />
        </YoutubeWrapper>
    )
}

export default YoutubeEmbed