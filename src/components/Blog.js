import React from 'react';
import Footer from './Footer';

const blogData = [
    {
        title: 'Blog Title 1',
        subTitle: 'Real content coming soon!',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Blog Title 2',
        subTitle: 'Real content coming soon!',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Blog Title 3',
        subTitle: 'Real content coming soon!',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
]

const Blog = () => {
    return <>
        <div className="page container-fluid no-padding">
            <section className="container-fluid p-5 shadow-md">
                <div className="row pt-4">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="py-4">
                            <h2 className="font-weight-bolder text-primary">Blog</h2>
                            <h4 className="text-secondary">I'll either be hella opinionated or insightful about certain Development or Design Topics</h4>
                        </div>
                        {
                            blogData.map((blog,i) => <div key={i} className="container my-5 shadow widget bg-white" >
                                <div className="row p-5">
                                    <div className="col-md-12">
                                        <h3 className="font-weight-bolder text-dark">{blog.title}</h3>
                                        <h4 className="text-secondary">{blog.subTitle}</h4>
                                        <p>{blog.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </section>
            <Footer/>
        </div>
    </>
}

export default Blog;