import React from 'react'

const GithubLink = ({ name = "M3MONs" }) => {
    return (
        <a href="https://github.com/M3MONs" target='_blank' rel="noreferrer">{name}</a>
    )
}

export default GithubLink