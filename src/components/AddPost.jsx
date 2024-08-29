import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm"
import { createPost } from "../api/posts";
import {v4 as uuidv4} from 'uuid';

 
const AddPost = () => {

    const queryClient = useQueryClient();

    const creatPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']})
            console.log("sucess")
        }
    });
    
    const handleAddPost = (post) => {
        creatPostMutation.mutate({
            id: uuidv4(),
            ...post
        })
    }

    return(
        <div>
            <h2>Adicione um novo usuário</h2>
            <PostForm onSubmit={handleAddPost} initialValue={{}}/>
        </div>
    )
}
export default AddPost