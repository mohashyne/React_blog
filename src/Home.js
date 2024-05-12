import { useState, useEffect } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {
          "id": 1,
          "title": "The Future of AI in Healthcare",
          "body": "Artificial Intelligence (AI) is revolutionizing the healthcare industry...",
          "author": "Muhammad Salihu"
        },
        {
          "id": 2,
          "title": "5G Technology: Transforming Connectivity",
          "body": "The advent of 5G technology promises faster speeds, lower latency, and...",
          "author": "Hauwa Muhammad"
        },
        {
          "id": 3,
          "title": "Blockchain: Beyond Cryptocurrency",
          "body": "While blockchain technology gained fame through cryptocurrencies like Bitcoin...",
          "author": "Zainab Muhammad"
        },
        {
          "id": 4,
          "title": "The Rise of Virtual Reality in Gaming",
          "body": "Virtual Reality (VR) technology is reshaping the gaming landscape, offering immersive experiences...",
          "author": "Muhammad Salihu"
        },
        {
          "id": 5,
          "title": "Cybersecurity Trends in 2024",
          "body": "With cyber threats evolving rapidly, staying ahead of the curve is crucial...",
          "author": "Muhammad Salihu"
        }
      ]
      ); 

      const handleDelete = (id) => {
         const newBlogs = blogs.filter((blog) => blog.id !== id )
         setBlogs(newBlogs);
      }

      // UseEffect: runs a function on every render of the component
      useEffect(() => {
        console.log('useeffect ran')
        console.log(blogs);
      });
 

    return (
        <div className="home">
        <BlogList blogs={blogs} title="All Tech Blogs" handleDelete={handleDelete}/> 
        <BlogList blogs={ blogs.filter((blog) => blog.author === 'Muhammad Salihu')}
         title="Muhammad's Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;