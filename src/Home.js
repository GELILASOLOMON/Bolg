import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data : blogs , isPending , error} = useFetch('http://localhost:8000/blogs')
    
  
    return (
      <div className="home">
        {error && <div>{error}</div> }
        {isPending && <div> Loading... </div> }
        {/* dynamic checking b/c blogs is null at first */}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/> }

      </div>
    );
  }
 
export default Home;

// const handleDelete= (id) =>{
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
    //   console.log('deleted');

    //}