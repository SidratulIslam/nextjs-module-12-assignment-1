export default async function getAllPosts() {
    // Fetch posts from the API
    const response = await fetch(
        'https://basic-blog.teamrabbil.com/api/post-list/2'
    )
    return  response.json()


}