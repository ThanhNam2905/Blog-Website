import data from '../data';

// api/posts/post/1
export default function getPostData (req, res) {
    const { postId } = req.query;
    const { Posts } = data;

    if(postId) {
        const post = Posts.find(item => item.id == postId);
        return res.status(200).json(post);
    }
    return res.status(404).json({error: "Post not found"})
}