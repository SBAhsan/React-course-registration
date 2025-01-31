import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddSelectedCourse}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    
    return (
        <div className="md:w-3/4 grid grid-cols-3">
            {/* <h2 className="text-4xl">Number of blogs : {blogs.length}</h2> */}
            {
                blogs.map(blog => <Blog handleAddSelectedCourse={handleAddSelectedCourse} key={blog.id} blog={blog}></Blog>)
            }          
        </div>
    );
};

export default Blogs;