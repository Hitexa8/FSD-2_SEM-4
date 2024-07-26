import axios from "axios";
import React,{useState,useEffect} from "react";
const baseURL = "https://dog.ceo/api/breeds/image/random";
function API() {
const [post, setPost] = useState("");
useEffect(() => {
axios.get(baseURL).then((response) => {
console.log(response.data)
setPost(response.data);
});
});
return (
<div>
{/* <h1>{post.title}</h1> */}
<img src={post.message} width="500px" height="500px"/>
</div>
);
}
export default API