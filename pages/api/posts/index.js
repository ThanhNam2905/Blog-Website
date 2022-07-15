import data from "../data";

// api/posts
export default function handleGetPostsData (req, res) {
    const { Posts } = data;
    if(Posts) {
        return res.status(200).json(Posts);
    }
    return res.status(404).json({error: "Data not found"});
}