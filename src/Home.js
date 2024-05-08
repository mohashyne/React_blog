import { useState } from "react";
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
          "author": "Sophia Chen"
        },
        {
          "id": 5,
          "title": "Cybersecurity Trends in 2024",
          "body": "With cyber threats evolving rapidly, staying ahead of the curve is crucial...",
          "author": "Michael Adams"
        }
      ]
      ); 
      
      const [blogContent, setBlogContent] =  useState('')

      const showBlogContent = ()  => {
          setBlogContent(blogs.map((blog) => {
                return blog.body;
           }))
      }
 

    return (
        <div className="home">
         {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <p>{ blogContent }</p>
                <button onClick={showBlogContent}>Show Content</button>
            </div>
         ))}
            
        </div>
    );
}
 
export default Home;