import React from 'react';
import '../../assets/styles/pages/blog.scss';
// import { Link } from 'react-router-dom';

const Blog = (props) =>{
    return(
        <section id = 'blog'>
            <div className = "layout">
                <div className = "blog-layout">
                        {
                            props.state.blog_info.map(
                                (info,index) => { 
                                return  <div className = 'blog-cont' key={index}>
                                            <div className = "blog-img" style={{backgroundImage: `url(${info.img})`}} key={index}></div> 
                                            <div className = "blog-text-cont" key={index}>
                                                <h2 key={index}>{info.title}</h2>
                                                <span key={index}>{info.text}</span>
                                                <button key={index}>Read more...</button>
                                            </div>
                                        </div>

                                }
                            )
                        }
                </div>
            </div>
        </section>
    )
}

export default Blog;
