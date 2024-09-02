import { useState } from "react";
import "../style.css"


const PostForm = ({ onSubmit, initialValue = {} }) => {
    const [post, setPost] = useState({
        nome : initialValue.nome || "",
        email: initialValue.email || ""
    });

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };

    const renderField = (label) => (
        <div className="form-group">
            <label>{label}</label>
            <input 
                onChange={handleChangeInput} 
                type="text" 
                name={label.toLowerCase()} 
                value={post[label.toLowerCase()] || ""} 
            />
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
        setPost({
            nome: "",
            email: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderField('nome')}
            {renderField('email')}
            <button type="submit" className="btn btn-primary">cadastrar</button>
        </form>
    );
};

export default PostForm;
