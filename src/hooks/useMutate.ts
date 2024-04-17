import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useMutate = () => {
    const url = 'http://localhost:8000/ads/advertises/'
    const {mutate} = useMutation({
        mutationFn: (data: any) => {
            return axios.post(url, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
    })
    return {mutate}
}