import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Form = ({ id, nama, username, hobi }) => {

    const navigate = useNavigate()

    const [input, setInput] = useState({})

    const baseUrl = import.meta.env.VITE_BASEURL

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

        await axios.post(`${baseUrl}/${id}`, input, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        
        .then(response => {
            console.log(response)
            navigate("/list-contact")
        })
        
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <form onSubmit={(e) => store(e)}>
                <div className="mb-6">
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                    <input type="text" id="nama" name="nama" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" />
                </div>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" id="username" name="username" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" />
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