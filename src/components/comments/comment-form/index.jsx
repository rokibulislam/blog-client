import React, { useState } from 'react'
import './styles.scss'
import Button from '../../../components/button'

const CommentForm = ({ onSubmit }) => {
    
    const [input, setInput] = useState({ comment: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit( input.comment )
        setInput({ comment: '' });
    }

    return (
        <div className="comment-form-container">
            <h2 className="comment-form-header"> Add a Comment </h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <textarea name="comment" className="form-control" rows="7" value={input.comment} onChange={handleChange} required> </textarea>
                </div>

                <div className="form-group">
                    <Button type="submit" label="Add Comment" variant="primary" />
                    <button type="submit" className="button button-primary"> Submit  </button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm