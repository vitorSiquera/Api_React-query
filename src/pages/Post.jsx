import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";
import { useQuery } from "@tanstack/react-query"; 
import "../style.css"

const Post = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {isLoading, isError, data: post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id),
    });

    if (isLoading) return 'loading...';
    if (isError) return `Error: ${error.message}`;

    return ( 
        <div className="container">
            <button className="btn btn-default" onClick={() => navigate("/")}>Voltar para a lista de usuários</button>
            <h1>{post.nome}</h1>
            <p>{post.email}</p>
        </div>
    );
};

export default Post;
 