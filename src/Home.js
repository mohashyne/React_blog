import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
 

    return (
        <div className="home">
        {error && <div>{error}</div>}
        {blogs && <BlogList blogs={blogs} title="All Tech Blogs" /> }
        {/* if data is still pending display this message */}
        {isPending ? 'Loading...' : null}
        {/* {blogs && <BlogList blogs={ blogs.filter((blog) => blog.author === 'Muhammad Salihu')} 
         title="Muhammad's Blogs" handleDelete={handleDelete}/> } */}
         {/* <button onClick={() => setName('Crystal Blue') }>change name</button>
         <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;