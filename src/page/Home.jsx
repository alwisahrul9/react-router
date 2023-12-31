import Form from "../component/Form";

const Home = () => {
    return (
        <section className="flex justify-center items-center h-screen rounded-lg px-8">
            <div className="border shadow-lg lg:w-1/2 xl:w-1/4 w-full p-8">
                <Form />
            </div>
        </section>
    )
}

export default Home;