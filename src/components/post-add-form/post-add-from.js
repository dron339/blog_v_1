import React from 'react';

const PostAddFrom = () => {
    return ( 
        <form>
            <input type = "text"
            placeholder = "О чем вы думаете ?"
            className = "from-control new-post-label"
            />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"> Добавить
                </button>
        </form>
    )
}

export default PostAddFrom;


