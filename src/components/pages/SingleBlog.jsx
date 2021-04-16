import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../assets/styles/pages/singleBlog.scss';
import BlogComments from './BlogComments';

const SingleBlog = (props) => {
    const ID = useParams()

    
    return (
        <section id="single-blog-page">
            <div className="layout">
                <div className="single-blog-layout">
                    {
                        props.state.blog_info.map((e, i) => {
                            return e.id === ID.id ?
                                <div className="single-blog-content" key={i}>
                                    <div className="image-block">
                                        <div className='blog-img' style={{ backgroundImage: `url(${e.singleImg})` }}></div>
                                    </div>
                                    <div className="main-content-block" ><h1>{e.title}</h1><span>{e.text}</span></div>
                                </div>
                                : '';
                        })
                    }
                    <div className="blog-lent-cont">
                        {
                            props.state.blog_info.map((e, i) => {
                                return (
                                    <Link key={i} to={`/blog/${e.title.split(" ").join("-").toLowerCase()}`}>
                                        <div className="blog-lent"><h4>{e.title}</h4><span>{e.text}</span></div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <BlogComments state={props.state.singleBlog} dispatch={props.dispatch} />
                </div>

            </div>
        </section>
    )
}

export default SingleBlog;