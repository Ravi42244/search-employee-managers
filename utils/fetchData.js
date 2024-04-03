import axios from "axios"

export const fetchData = async (BACKEND_URL,email) => {

const result = await axios.get(`${BACKEND_URL}/${email}`)
  return (result.data)
}
