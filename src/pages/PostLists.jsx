import React, { useState } from "react";
import AddPost from "../components/AddPost";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../api/posts";
import { useNavigate } from "react-router-dom";
import '../style.css';

const PostLists = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; 

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

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="post-list">
            <AddPost />
            {currentPosts.map(post => (
                <div key={post.id} className="post-container">
                    <div className="post-title" onClick={() => navigate(`/post/${post.id}`)}>
                        {post.nome}
                    </div>
                    <div className="post-email">
                        {post.email}
                    </div>
                    <br/>
                    <div className="post-actions">
                        <button className="btn btn-primary" onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button>
                        <button className="btn btn-default" onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                </div>
            ))}

         
            <div className="pagination">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PostLists;

