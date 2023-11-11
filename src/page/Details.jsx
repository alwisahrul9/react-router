import axios from "axios"
import { Link, useNavigate, useLoaderData } from "react-router-dom"


// Loader Function
export const detailsLoader = async ({ params }) => {
    const baseUrl = import.meta.env.VITE_BASEURL

    const { detailsId } = params

    const res = await axios.get(`${baseUrl}/${detailsId}`)

    return res.data.data

}

const Details = () => {

    const data = useLoaderData()

    const navigate = useNavigate()

    const hapus = (id) => {
        const baseUrl = import.meta.env.VITE_BASEURL
        
        axios.get(`${baseUrl}/hapus/${id}`)

        .then((response) => {
            console.log(response)
            navigate("/list-contact")
        })

        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <section className="flex justify-center items-center h-screen">
                <div className="lg:w-1/2 w-screen mx-3 border shadow-lg p-5 relative">
                    <div className="absolute right-4 flex flex-wrap gap-2">
                        <Link to={`edit/${data.id}`}>
                            <button>
                                <svg className="w-8 h-8 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                                </svg>
                            </button>
                        </Link>
                        <button onClick={() => hapus(data.id)}>
                            <svg className="w-8 h-8 text-rose-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                            </svg>
                        </button>
                    </div>
                    <img src={data.foto === null ? 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg' : data.foto} className="w-32 block mx-auto"/>
                    <h1 className="text-center text-xl mt-3">{data.nama}</h1>
                    <p className="text-center text-lg underline font-semibold mt-6">Username</p>
                    <p className="text-center">{data.username}</p>
                    <p className="text-center text-lg underline font-semibold mt-6">Hobi</p>
                    <p className="text-center">{data.hobi}</p>
                </div>
            </section>
        </>
    )
}

export default Details