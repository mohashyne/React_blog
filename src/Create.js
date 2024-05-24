import { useState } from "react";

const Create = () => {
   const [title, setTittle] = useState('');
   const [body, setBody] =  useState('');
   const [author, setAuthor] =  useState('Muhammad');

   const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(blog);
   }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form  onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTittle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Muhammad">Muhammad</option>
                    <option value="Hauwa">Hauwa</option>
                    <option value="Musa">Musa</option>
                </select>
                <button>Add Blog</button>
<div>
    
                    <p>{`Title is changing to:  ${title}`}</p>
                    <p>{`Body is changing to:  ${body}`}</p>
                    <p>{`Author is changing to:  ${author}`}</p>
</div>
            </form>
        </div>
     );
}
 
export default Create;