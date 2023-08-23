export default async function getSinglePost(id) {
    // Fetch posts from the API
    const response = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-details/${id}`
    )
    return  response.json()

}