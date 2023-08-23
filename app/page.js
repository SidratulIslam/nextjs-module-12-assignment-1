// pages/index.js
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import getLatestPosts from "@/lib/getLatestPosts";

export default async function Home() {
    const posts = await getLatestPosts()
    return (
        <div className="container mx-auto px-4">
            <section className="section-1 py-10">
                <h2>Welcome to my cricket blog</h2>
                <p>
                    Hi, I'm Rabbil, a cricket blogger and enthusiast. I write about
                    various topics related to cricket, such as match previews and
                    reviews, player profiles, team rankings, records, trivia, news, and
                    more. I also write about the history and culture of cricket, and how
                    it influences society and politics.
                </p>
                <p>
                    I hope you enjoy reading my blog and find it informative,
                    engaging, and entertaining. If you have any feedback or suggestions,
                    feel free to contact me. You can also follow me on social media to
                    get the latest updates on my blog posts.
                </p>
            </section>
            <section className="section-2 py-10">
                <h2>Latest blog posts</h2>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="m-5" key={post.id}>
                            <Link href={`/blog/${post.id}`}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src={post.img} alt="Sunset in the mountains"/>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">  {post.title}</div>
                                        <p className="text-gray-700 text-base">
                                            {post.short}
                                        </p>
                                    </div>
                                </div>

                            </Link>

                        </div>
                    ))}
                </div>

            </section>
            <section className="section-3 py-10">
                <h2>Subscribe to my newsletter</h2>
                <p>
                    If you want to get notified when I publish new blog posts, you can
                    subscribe to my newsletter. You will receive an email with a link to
                    the latest post every time I update my blog. You can unsubscribe at
                    any time.
                </p>
            </section>
        </div>
    )
}
