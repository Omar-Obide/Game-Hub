import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../Services/api-client"

interface Genres {
    id: number
    name: string
}

interface Response {
    count: number
    results: Genres[]
}

const useGenres = () => {
    const[genres ,setgenres] = useState<Genres[]>([])
    const[error ,seterror] = useState('')
    const [isloading, setisloading] = useState(false) 

    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<Response>("/genres", {signal: controller.signal})
        .then(res => {
            setgenres(res.data.results);
        setisloading(false)})
        .catch(err => {
            if(err instanceof CanceledError) return;
            seterror(err.message)
            setisloading(false)
        })
    })
    

    return {genres, error, isloading}
}

export default useGenres