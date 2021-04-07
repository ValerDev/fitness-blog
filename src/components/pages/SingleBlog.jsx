import React from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/styles/pages/singleBlog.scss';


const SingleBlog = (props) => {
    const ID = useParams()
    return (
        <section id="single-blog-page">
            <div className="layout">
                <div className="single-blog-content">
                    <div className="image-block">
                        {props.blog_info.map((elem, index) => {
                            return elem.id === ID.id ? <div className='blog-img' key={index} style={{ backgroundImage: `url(${elem.img})`, width: '300px', height: '300px' }}></div> : '';
                        })}
                    </div>
                    <div className="main-content-block">
                        {
                            props.blog_info.map((e, i) => {
                                return (
                                    e.id === ID.id ? <div key={i}><h2>{e.title}</h2><span>{e.text}</span></div>
                                        : ""
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleBlog;