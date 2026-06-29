import axios from "axios";

const braveBaseUrl = process.env.BRAVE_BASE_URL || ""

const braveSearch = async (query: string) => {
  const response = await axios.get(braveBaseUrl,{
    params: {
        q: query
    },
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
        'X-Subscription-Token': process.env.BRAVE_API_KEY
    }
  })

  return response.data?.locations || [];
};

export default braveSearch