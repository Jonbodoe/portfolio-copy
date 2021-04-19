import React from 'react';
import Footer from './Footer';

export default function Contact() {
    return <div className="page container-fluid no-padding">
        <section className="container-fluid p-5 shadow-md">
            <div className="row pt-4">
                <div className="col-md-1"></div>
                <div className="col-sm-5 py-4">
                    <h2 className="font-weight-bolder text-primary">Contact</h2>
                    <div className="py-4">
                        <h4 className="pb-4 text-secondary">If you got any questions or want to say hello!</h4>
                        <div className="text-secondary boldish"><i class="fas fa-envelope"></i> : Jonathan.le@jefferson.edu</div>
                        <div className="text-secondary boldish"><i class="fab fa-github"></i> : Github <a href="https://github.com/Jonbodoe" target="_blank" rel="noopener noreferrer">Link</a></div>
                        <div className="text-secondary boldish"><i class="fab fa-linkedin"></i> : Linkedin <a href="https://www.linkedin.com/in/jonathan-le-7336b71a0/" target="_blank" rel="noopener noreferrer">Link</a></div>
                    </div>
                </div>
                <div className="col-sm-5 py-4">
                <h4 className="pt-1 pb-4 font-weight-bolder text-dark">Lets Work Together!</h4>
                    <form>
                    <div class="form-group">
                            <label for="exampleFormControlTextarea1">Full Name</label>
                            <input class="form-control" type="text" placeholder="Enter Full Name"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message Here"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <p className="text-secondary pt-3">* Form still being worked on for functionality</p>
                </div>
                <div className="col-md-1"></div>
            </div>
        </section>
        <Footer/>
    </div>
}
