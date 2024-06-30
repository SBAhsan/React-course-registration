import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    
    return (
        <div className="md:w-3/4">
            <h2 className="text-4xl">Number of blogs : {blogs.length}</h2>          
        </div>
    );
};

export default Blogs;