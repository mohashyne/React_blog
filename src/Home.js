import { useState, useEffect } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null); 

      const [name, setName] = useState('crystal')

      const handleDelete = (id) => {
         const newBlogs = blogs.filter((blog) => blog.id !== id )
         setBlogs(newBlogs);
      }

      // UseEffect: runs a function on every render of the component
      useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then((data) => {
        setBlogs(data)
        })
      }, []);
 

    return (
        <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Tech Blogs" handleDelete={handleDelete}/> }
        {blogs && <BlogList blogs={ blogs.filter((blog) => blog.author === 'Muhammad Salihu')} 
         title="Muhammad's Blogs" handleDelete={handleDelete}/> }
         <button onClick={() => setName('Crystal Blue') }>change name</button>
         <p>{ name }</p>
        </div>
    );
}
 
export default Home;