import ImagePlacholder from '../assets/no-image-placeholder-6f3882e0.webp'

const GetCroppedImage = (url: string) => {
    if (!url) return ImagePlacholder
    //https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
    const index = url.indexOf("io/media") + "io/media".length
    const newUrl = url.slice(0, index) + "/crop/600/400" + url.slice(index)
    
        return newUrl
}

export default GetCroppedImage