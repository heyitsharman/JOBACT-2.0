import React from 'react';
import './BlogsCard.css'; 

const BlogCard = () => {
    const blogs =[ 
{
    date: 'April 7, 2021',
    title: 'How to enjoy your work',
    image: 'assets/blogimage1.jpeg'
},
{
    date: 'November 1, 2023',
    title: '10 Tips for Technical Interviews',
    image: 'assets/blog-2.jpeg'
},
{
    date: 'December 12, 2024',
    title: 'Managing Time and Prioritizing Tasks',
    image: 'assets/blog-3.jpeg'
}
]

return <>
    <section className='blog' id='blog'>
    <h1 className="section-title">Career Advices</h1>
    <p>Explore insightful tips and strategies to advance your career <br/>
    and to achieve your professional goals.</p>
    <div className="blog-wrapper">
        <div className="blog-card">
           {
            blogs.map(blog=> (
                <div className="blog-detail">
                    <img className='blog-image' src={blog.image}></img>
                    <span>{blog.date}</span>
                    <h4>{blog.title}</h4>
                    <hr className="divider" />
                    <a href="#">Read More</a>
                </div>
            ))
           }
        
        </div>
    </div>

    </section>

</>

};



export default BlogCard;