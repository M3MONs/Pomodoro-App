const formatTime = (time) => {
    const min = Math.floor(time / (1000 * 60))
    const sec = Math.floor((time % (1000 * 60)) / 1000)
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
}


export { formatTime }