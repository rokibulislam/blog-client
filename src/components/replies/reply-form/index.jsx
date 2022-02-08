import React, { useState } from 'react'
import Button from '../../button'

const ReplyForm = ({ parent, onReply, onCancelReply }) => {
    const [reply, setReply] = useState({ name: '',  comment: '' });

    const cancel = (e) => {
        e.preventDefault();
        onCancelReply(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onReply(parent, reply);
        setReply('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <textarea 
                    className="form-control"
                    name="reply"
                    rows="3"
                    placeholder="Leave Your Reply"
                    onChange={ e => setReply(e.target.value) }
                    required
                > </textarea>
            </div>

            <div className="form-group">
                <Button type="submit" label="Add Reply" variant="primary"/>
                <Button type="button" label="Cancel" onClick={cancel} variant="link"/>
                {/* <button type="submit"  className="button button-primary"> Reply </button> */}
                {/* <button type="button" className="button button-link" onClick={cancel}> Cancel </button> */}
            </div>
        </form>
    )
}

export default ReplyForm