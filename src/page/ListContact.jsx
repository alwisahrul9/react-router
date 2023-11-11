import axios from "axios"
import { Link, useLoaderData } from "react-router-dom"

export const dataLoader = async () => {

    const baseUrl = import.meta.env.VITE_BASEURL

    const res = await axios.get(`${baseUrl}`)
    const data = res.data.data

    return data
    
}

const ListContact = () => {

    const getData = useLoaderData()

    return (
        <>
            <section className="flex justify-center items-center h-screen px-3">
                <div className="lg:w-1/2 w-full mx-10 border shadow-lg p-5">
                    <h1 className="text-2xl text-center font-semibold mb-6">List Contact</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Hobi
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getData.map((item, index) => 
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                { index+1 }
                                            </th>
                                            <td className="px-6 py-4">
                                                { item.nama }
                                            </td>
                                            <td className="px-6 py-4">
                                                { item.hobi }
                                            </td>
                                            <td className="px-6 py-4">
                                                { item.username }
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`details/${item.id}`}>
                                                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                        Detail
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>                                       
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListContact