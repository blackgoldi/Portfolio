type ID = string
type ImageUrl = string

// type Duration = number

// type isPublished = boolean
// type artist = null | string
// type album = undefined | string


interface IArtist{
    id:ID,
    name:string
    image:ImageUrl
    isVerified: boolean
}

interface ITrack{
    id:ID
    artist: IArtist
}