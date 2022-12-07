import {useState,useEffect} from "react";
import axios from "axios";
import {API_TOKEN,API_URL} from "../consts";

const CoronaForContient = () =>{
    const [headers]=useState([
      {
         title:"Continent",
         value:"continent"
      },
      {
        title:"Active Cases",
        value:"activeCases"
     },
     {
        title:"Total Cases",
        value:"totalCases"
     },
     {
        title:"Total Deaths",
        value:"totalDeaths"
     },
     {
        title:"New Deaths",
        value:"newDeaths"
     },
     {
        title:"Total Recovered",
        value:"totalRecovered"
     },
    ]);

    const [loading,setLoading] = useState(false);
    const [data,setData]=useState([])

    const fetchdata=async()=>{
    setLoading(true);
    const response = await axios.get(`${API_URL}continentData`,{
        headers:{
            authorization:API_TOKEN
        }
    })
    setLoading(false)
    setData(response.data.result)
    }

    useEffect(()=>{
    fetchdata()
    },[])

    return(
         <div className="flex flex-col">
           <div className="inline-block min-w-full">
             <h1 className="text-2xl mb-4 font-bold text-gray-900">Coron Table</h1>
              <div className="overflow-hidden shadow-md">
                   {loading ? <p>Loading...</p>:<table className="min w-full">
                    <thead className="bg-gray-600">
                       <tr>
                        {headers.map((item)=>{
                           return(
                            <th key={item.title} className="py-3 px-6 text-xs font-medium text-gray-300 uppercase text-left">
                               {item.title} 
                            </th>
                           )
                        })}
                       </tr>
                    </thead>
                    <tbody>
                      {data.map((item)=>{
                      return(
                        <tr key={item.continent} className="bg-gray-600 border-b">
                                {headers.map((subItem)=>{
                                  return(
                                  <td key={subItem.value} className="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">
                                    {item[subItem.value]}
                                  </td>
                                  );
                                })}            
                        </tr>
                      );
                      })}
                    </tbody>
                    </table>}
              </div>
           </div>
         </div>
    );

}


export default CoronaForContient