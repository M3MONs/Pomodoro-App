import React from 'react'
import FooterWrapper from './Footer.style'
import GithubLink from './GithubLink'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <FooterWrapper>
            <p>© {currentYear} Copyright: <GithubLink /></p>
        </FooterWrapper>
    )
}

export default Footer