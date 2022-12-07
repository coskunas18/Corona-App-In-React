import { useEffect,useState } from "react"
import {API_URL,API_TOKEN} from "../consts"
import axios from "axios"

const RecordedCorona = () =>{
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  
  const fetchData = async () =>{
    setLoading(true)
    const response = await axios.get(`${API_URL}totalData`,{
        headers:{
            authorization:API_TOKEN
        }
    })
    setLoading(false)
    setData(response.data.result)
  }

  useEffect(()=>{
fetchData()
  },[])

    return(
        <div className="flex flex-col items-center justify-center h-full">
           {loading ? <p>Loading...</p>:
           <>
           <h1 className="text-6xl text-gray-900 mb-4">Total Case:{data?.totalCases}</h1>
           <h1 className="text-6xl text-gray-800 mb-6">Total Deaths:{data?.totalDeaths}</h1>
           <h1 className="text-6xl text-gray-700">Total Recovered:{data?.totalRecovered}</h1>
           </>
           }
        </div>
    );
}

export default RecordedCorona