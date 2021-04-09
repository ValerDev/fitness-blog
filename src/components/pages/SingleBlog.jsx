import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../assets/styles/pages/singleBlog.scss';


const SingleBlog = (props) => {
    const ID = useParams()
    return (
        <section id="single-blog-page">
            <div className="layout">
                <div className="single-blog-layout">
                        {
                            props.blog_info.map((elem, index) => {
                                return elem.id === ID.id ?
                                    <div className="single-blog-content">
                                        <div className="image-block">
                                            <div className='blog-img' key={index} style={{ backgroundImage: `url(${elem.singleImg})`}}></div>
                                        </div>
                                        <div className="main-content-block" key={index}><h1>{elem.title}</h1><span>{elem.text}</span></div>
                                    </div>
                                : '';
                            })
                        }
                    <div className="blog-lent-cont">
                        {
                            props.blog_info.map((element,ind) =>{
                               return (
                               <Link exact to = {`/blog/${element.title.split(" ").join("-").toLowerCase()}`}>
                                    <div className = "blog-lent" key ={ind}><h4>{element.title}</h4><span>{element.text}</span></div>
                               </Link>
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