import { useState, useEffect } from 'react';
import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, Error } = useFetch(' http://localhost:8000/blogs')
    console.log(blogs);
    return (  
        <div className="home">
            {/* { error && <div>{ error }</div} */}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}
        </div>
    );
}
 
export default Home;