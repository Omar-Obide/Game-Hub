
const GetCroppedIMage = (url: string) => {
    //https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
    const index = url.indexOf("io/media") + "io/media".length
    const index2 = url.indexOf("/games")
    const newUrl = url.slice(0, index) + "/crop/600/400" + url.slice(index2)

    return newUrl
}

export default GetCroppedIMage