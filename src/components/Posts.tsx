import { useEffect, useState } from "react";
import Post from "./Post";
export type postType={
    title:string;
    description:string;
    thumbnail:string;
    category:string;
    price:number
}
const Posts = () => {
    const [posts,setPosts]=useState<postType[]>([])
    const url='https://dummyjson.com/products'
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(post=>setPosts(post.products))
    },[])
    console.log(posts)
    return (
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
            {
                posts.map((post,index)=><Post key={index} 
                title={post.title}
                description={post.description}
                thumbnail={post.thumbnail}
                price={post.price}
                category={post.category}
                ></Post>)
            }
        </div>
    );
};

export default Posts;