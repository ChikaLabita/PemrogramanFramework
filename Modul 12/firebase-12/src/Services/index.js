import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

//GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

//POST
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);

//DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;