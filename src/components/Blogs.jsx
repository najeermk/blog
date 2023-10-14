import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {

    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            
            <Link to={`/blogs/${blog.id}`}>
                <h2>{ blog.title }</h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default Blogs;