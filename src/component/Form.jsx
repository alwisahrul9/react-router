import axios from "axios";
import { useEffect, useState } from "react"

const Form = () => {

    const [input, setInput] = useState({})

    const [data, setData] = useState([])
    const [alert, setAlert] = useState(false)

    const baseUrl = import.meta.env.VITE_BASEURL

    useEffect( () => {
        axios.get(`${baseUrl}`)

        .then((response) => {
            setData(response.data.data)
        })

        .catch((error) => {
            console.log(error)
        })
    },[])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    const store = async (e) => {
        e.preventDefault();

        if(data.length >= 5){
            setAlert(true)
            
        } else {
            await axios.post(`${baseUrl}`, input, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            
            .then(response => {
                console.log(response)
            })
            
            .catch(error => {
                console.log(error)
            })
        }

        console.log(input)
    }

    return (
        <>
            <form onSubmit={(e) => store(e)}>
                <div className={alert ? "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" : "hidden"} role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-semibold">PERINGATAN!</span> Batas maksimal data terpenuhi.
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                    <input type="text" id="nama" name="nama" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" />
                </div>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" id="username" name="username" value={input.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label htmlFor="hobi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hobi</label>
                    <input type="text" id="hobi" name="hobi" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hobi" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form