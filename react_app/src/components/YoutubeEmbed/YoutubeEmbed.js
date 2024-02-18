import React, { useState } from 'react'
import YoutubeWrapper from './YoutubeEmbed.style'
import YouTube from 'react-youtube'
import { Input } from 'antd'
import { extractVideoId, opts } from './YoutubeEmbed.utils'

const YoutubeEmbed = () => {
    const [videoLink, setVideoLink] = useState('mmKguZohAck')
    const [userInputLink, setUserInputLink] = useState('')

    const handleEnterLink = (e) => {
        if (e.key === 'Enter') {
            setVideoLink(extractVideoId(userInputLink))
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