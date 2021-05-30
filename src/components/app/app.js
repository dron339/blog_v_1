import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatysFilter from '../post-statys-filter';
import PostList from '../post-list';
import PostAddFrom from '../post-add-form';


import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../search-panel/search-panel.css';


const App = () => {
    return ( 
        <div >
            <AppHeader/>
                <div className = "search-panel d-flex">
                    <SearchPanel/>
                    <PostStatysFilter/>
                </div> 
            <PostList/>
            <PostAddFrom/>
        </div>
    )
}

export default App;