import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()

    return ( 
    <div className="blogdetails">
    <h2>Blog Details  -  { id }</h2>
    </div>
     );
}
 
export default BlogDetails;