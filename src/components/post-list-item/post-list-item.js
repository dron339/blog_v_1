import React from 'react';

const PostListItem = () => {
    return ( 
        <li className = "app-list0item d-flex justify-content-between" >
            <span className = "app-list-item-label" >
                Hellow World!
            </span> 
                <div className = "d-flex justify-content-center align-items-center" >
                    <button className = "btn-star btn-sm" >
                        <i className = "fa fa-star" ></i> 
                    </button > 
                    <button className = "btn-trash btn-sm" >
                        <i className = "fa fa-trash-o" > </i> 
                    </button > 
                        <i className = "fa fa-hard" > </i> 
                </div > 
        </li>
    )
}


export default PostListItem;