export default async function getLatestPosts() {
    // Fetch posts from the API
    const response = await fetch(
        'https://basic-blog.teamrabbil.com/api/post-newest'
    )
    return  response.json()


}