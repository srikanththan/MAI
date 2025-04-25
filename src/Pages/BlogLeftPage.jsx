import BlogLeftSidebar from "../Components/Blog/BlogLeftSidebar";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogLeftPage = () => {
    return (
        <div>
        <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Blog left sidebar"
            ></BreadCumb>   
            <BlogLeftSidebar></BlogLeftSidebar>          
        </div>
    );
};

export default BlogLeftPage;