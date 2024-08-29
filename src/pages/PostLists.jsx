import React from "react";
import AddPost from "../components/AddPost";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {deletePost, fetchPosts} from "../api/posts"
import { useNavigate } from "react-router-dom";
 

const PostLists = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {isLoading, isError, data: posts, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () =>
            queryClient.invalidateQueries({queryKey: ['posts']})
    });

    const handleDelete = (id) =>{
        deletePostMutation.mutate(id)
    }

    if (isLoading) return 'loading...'
    if (isError) return `Error: ${error.messege}`


    return(
        <div>
            <AddPost/>
            {posts.map(post =>(
                <div key={post.id} style={{background: "#777"}}>
                    <h4 style={{ cursor: "pointer"}}onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h4>
                    <button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default PostLists 