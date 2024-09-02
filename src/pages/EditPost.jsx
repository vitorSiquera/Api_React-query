import { useMutation, useQuery } from "@tanstack/react-query"; 
import PostForm from "../components/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../api/posts";
import { useQueryClient } from "@tanstack/react-query";
import "../style.css"

const EditPost = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {id} = useParams();
    const {isLoading, isError, data: post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id)
    });

    const updatePostMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']})
            navigate("/")
        }
    });

    if (isLoading) return 'loading...';
    if (isError) return `Error: ${error.message}`;

    const handleSubmit = (updatedPost) => {
        updatePostMutation.mutate({id, ...updatedPost});
    };

    return (
        <div className="container">
            <h3>Alteração de cadastro</h3>
            <PostForm onSubmit={handleSubmit} initialValue={post} />
        </div>
    );
};

export default EditPost;
