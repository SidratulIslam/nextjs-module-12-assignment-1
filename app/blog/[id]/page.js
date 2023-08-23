import styles from './blog[id].module.css'
import getSinglePost from "@/lib/getSinglePost";
import React from "react";

export default async function SingleBlog({params}) {
    const { id } = params // get the id from the route query

    const post = await getSinglePost(id)

    // if the post is not found, show a 404 page
    if (!post || !post.postDetails) {
        return <div>404 - Not Found</div>
    }

    // otherwise, display the post title, content, and date
    return (
        <div className="container mx-auto px-4">
            <div className="">
                <img className="max-w-md overflow-hidden shadow-lg" src={post.postDetails.img} alt="Sunset in the mountains"/>
                <div className="py-4">
                    <div className="font-bold text-xl mb-2">  {post.postDetails.title}</div>
                    <p className="text-gray-700 text-base">
                        {post.postDetails.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
