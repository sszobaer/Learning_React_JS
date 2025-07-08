import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Api = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
        setData(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getData()
      }, [])
  return (
    <div>
      {/* <button onClick={getData} className="bg-teal-800 m-3 px-4 py-3 text-xl rounded">Get Data</button> */}
        <h1 className='text-3xl text-center font-bold text-gray-200'>API Data</h1>
      <div className="flex p-5 mt-5 flex-wrap bg-gray-950">
        {
            data.map(function(elem, idx){
                return(
                    <div key = {idx} className='flex flex-col items-center m-3 p-3 bg-slate-800 rounded'>
                        <img className="h-40 rounded" src={elem.download_url} alt="" />
                        <h1>{elem.author}</h1>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Api
