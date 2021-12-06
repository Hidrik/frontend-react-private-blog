import React, {useState} from 'react';
import {NavLink, Route, Switch, useHistory,} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPosts from "./pages/BlogPosts";
import Product from "./components/Product";

import posts from './data/posts.json'

import './App.css';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const history = useHistory();

    function getTotalBlogpostsCount(posts) {
        return posts.length
    }

    return (<>
            <nav className='navigation'>
                <NavLink to='/' className='individual-navigation'>
                    Homepagina
                </NavLink>
                {isAuthenticated ?
                    <NavLink to='/BlogPosts' className='individual-navigation'>
                        Blogposts
                    </NavLink>
                :''}

                {!isAuthenticated ?

                    <NavLink to='/LoginPage' className='individual-navigation'>
                        login pagina
                    </NavLink>
                    :
                    <button onClick={() => {
                        toggleIsAuthenticated(false)
                        history.push('/')
                    }}  className='individual-navigation'> Uitloggen </button>}
            </nav>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/BlogPosts'>
                    <BlogPosts postCount={getTotalBlogpostsCount(posts)} posts={posts}/>
                </Route>
                <Route exact path="/LoginPage">
                    <LoginPage toggleIsAuthenticated={toggleIsAuthenticated}/>
                </Route>
                <Route path="/product/:id">
                    <Product/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
