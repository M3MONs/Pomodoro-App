import React from 'react'
import FooterWrapper from './Footer.style'
import GithubLink from '../../atoms/GithubLink'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <FooterWrapper>
            <p>© {currentYear} Copyright: <GithubLink /> | Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6346">Pixabay</a></p>
        </FooterWrapper>
    )
}

export default Footer