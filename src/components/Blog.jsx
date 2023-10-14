import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Blog = () => {
const [blog, setBlog] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);
const { id } = useParams();

useEffect(() => {
  setTimeout(() => {
    fetch('http://localhost:8000/blogs/' + id)
    .then(res => {
      if (!res.ok) { 
        throw Error('could not fetch the data for the requested resource');
      } 
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setBlog(data);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
  }, 1000);
}, [])

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
        }).then(() => {
        history.push('/');
        }) 
    }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <div>{ blog.body }</div>
          <Link to="/"><button>Back</button></Link>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default Blog;