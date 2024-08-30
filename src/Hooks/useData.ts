import { AxiosRequestConfig, CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../Services/api-client"

interface Response <T>{
    count: number
    results: T[]
}

const useData = <T>(endpoint: string, RequestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const[data ,setdata] = useState<T[]>([])
    const[error ,seterror] = useState('')
    const [isloading, setisloading] = useState(false) 

    useEffect(() => {
        setisloading(true)
        const controller = new AbortController()
        apiClient
        .get<Response<T>>(endpoint, {signal: controller.signal, ...RequestConfig})
        .then(res => {
            setdata(res.data.results);
        setisloading(false)})
        .catch(err => {
            if(err instanceof CanceledError) return;
            seterror(err.message)
            setisloading(false)
        })
        return () => controller.abort()
    }, deps ? [...deps] : [])
    

    return {data , error, isloading}
}

export default useData