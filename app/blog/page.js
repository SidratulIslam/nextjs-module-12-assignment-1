
import Link from "next/link";
import styles from './blog.module.css'
import getAllPosts from "@/lib/getAllPost";

export default async function Blog() {
    const posts = await getAllPosts()
    return (
        <div className="container mx-auto px-4">
            <section>
                <h1 className={styles.title}>Blogs</h1>
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
        </div>

    )
}
