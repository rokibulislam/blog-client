import React, { useState } from 'react'
import Modal from '../../modal'
import Alert from '../../alert'
import Button from '../../button'

const PostAdd = ({handleSubmit}) => {
    const [input, setInput ] = useState ({
        title: '',
        content: ''
    })

    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit( input.title, input.content );
        setInput({ title: '', content: '' })
        setSubmitted(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        setShow(true);
    }

    const handleOnClose = (e) => {
        e.preventDefault();
        setShow(false);
    }

    return (
    <>
        <Button type="button" onClick={handleOnClick} label="Create New Post" variant="primary" />
        {/* <button onClick={handleOnClick} className="button button-primary" > Create New Post </button> */}


        <Modal show={show}>
        {submitted && (
            <Alert variant="success" 
                message="Post created successfully!" 
                onClose={(e) => {e.preventDefault(); setSubmitted(false)}} 
            />
        )} 
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input name="title" className="form-control" type="text" placeholder="Title" value={input.title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <textarea name="content" className="form-control" rows="10" value={input.content} placeholder="content" onChange={handleChange} > </textarea>
                </div> 

                <div className="modal-footer">
                    <button type="submit" className="button button-primary"> Submit  </button>

                    <button
                        onClick={handleOnClose}
                        className="button button-link"
                    > Cancel </button>
                </div>
            </form>
        </Modal>
    </>
    )
}

export default PostAdd