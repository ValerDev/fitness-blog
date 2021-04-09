import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/pages/blog.scss';

const Blog = (props) => {
    let d = new Date();
    return (
        <section id='blog'>
            <div className="layout">
                <div className="blog-layout">
                    {
                        props.blog_info.map(
                            (info, index) => {
                                return <div className='blog-cont' key={index}>
                                    <div className="blog-img" style={{ backgroundImage: `url(${info.img})` }} ></div>
                                    <div className="blog-text-cont" >
                                        <div className="title-date">
                                            <h2>{info.title}</h2>
                                            <span>{`${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`}</span>
                                        </div>
                                        <span >{info.text}</span>
                                        <Link exact to = {`/blog/${info.title.split(' ').join('-').toLowerCase()}`}>
                                            <button >Read more...</button>
                                        </Link>
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
