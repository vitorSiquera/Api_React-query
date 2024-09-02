import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostForm from "./PostForm";
import { createPost } from "../api/posts";
import { v4 as uuidv4 } from 'uuid';
import "../style.css"


const AddPost = () => {
    const queryClient = useQueryClient();

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            console.log("success")
        }
    });

    const handleAddPost = (post) => {
        createPostMutation.mutate({
            id: uuidv4(),
            ...post
        });
    };

    return (
        <div className="add-post">
            <h2 className="font">Adicione um novo usuário</h2>
            <PostForm onSubmit={handleAddPost} initialValue={{}} />
        </div>
    );
};

export default AddPost;
