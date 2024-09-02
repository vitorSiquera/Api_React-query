import React from "react";
import AddPost from "../components/AddPost";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../api/posts";
import { useNavigate } from "react-router-dom";
import '../style.css';

const PostLists = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isLoading, isError, data: posts, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ['posts'] })
    });

    const handleDelete = (id) => {
        deletePostMutation.mutate(id);
    };

    if (isLoading) return 'loading...';
    if (isError) return `Error: ${error.message}`;

    return (
        <div className="post-list">
            <AddPost />
            {posts.map(post => (
                <div key={post.id} className="post-container">
                    <div className="post-title" onClick={() => navigate(`/post/${post.id}`)}>
                        {post.nome}
                    </div> 
                    <br></br>
                    <div className="post-email">
                            {post.email}
                    </div>
                    <div className="post-actions">
                        <button className="btn btn-primary" onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button> 
                        <button className="btn btn-default" onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostLists;
