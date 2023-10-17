import { useLoaderData, useParams } from "react-router-dom";
import Form from "../component/FormEdit";
import axios from "axios";

const EditPage = () => {
    const { editId } = useParams()
    const data = useLoaderData()

    return (
        <section className="flex justify-center items-center rounded-lg mt-56 px-8">
            <div className="border shadow-lg lg:w-1/2 xl:w-1/4 w-full p-8">
                <Form id={editId} nama={data.nama} username={data.username} hobi={data.hobi}/>
            </div>
        </section>
    )
}

export const loaderEdit = async ({ params }) => {
    const baseUrl = import.meta.env.VITE_BASEURL

    const { editId } = params

    const res = await axios.get(`${baseUrl}/${editId}`)

    return res.data.data
}

export default EditPage;