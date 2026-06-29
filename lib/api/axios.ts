import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const post = async(url: string, data: any) => {
    try{
        const response = await api.post(url, data);
        return {
            data: response.data,
            error: null
        }

    }catch(e:any){
        return {
            data: null,
            error: e.response?.data?.error || e.message
        }
    }
}

export const openStreetMap = axios.create({
    baseURL: "https://nominatim.openstreetmap.org",
    headers: {
        "User-Agent": "YourAppName/1.0 (glix.coder@gmail.com)",
    },
});