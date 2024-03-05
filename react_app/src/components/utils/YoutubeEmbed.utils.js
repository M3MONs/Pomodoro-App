export const opts = {
    height: '220',
    width: '450',
    playerVars: {
        autoplay: 1,
    }
}

export const extractVideoId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[7]
}