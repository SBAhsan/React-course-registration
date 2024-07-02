import { BsBook } from "react-icons/bs";


const Blog = ({ blog, handleAddSelectedCourse }) => {
    const { cover, title, description, price, credit_hour } = blog;
    return (
        <div className="px-10 py-10 w-auto">
            <img className="w-full pb-3" src={cover} alt="" />
            <h1 className="text-3xl pb-3">{title}</h1>
            <p className="pb-3">{description}</p>
            <div className="flex justify-between pb-3">
                <span className="text-xl">$ Price : {price}</span>
                <button><BsBook></BsBook></button>
                <span className="text-xl">Credit : {credit_hour}</span>
            </div>
            <button onClick={handleAddSelectedCourse} className="w-full bg-blue-600 text-white text-xl py-2 rounded-md pb-3">Select</button>
        </div>
    );
};

export default Blog;