import React from 'react';

export default function Contact() {
    return <div className="container py-4">
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="font-weight-bold text-primary py-4">Contact</h3>
                    <div className="text-secondary boldish"><i class="fas fa-envelope"></i> : Jonathan.le@jefferson.edu</div>
                    <div className="text-secondary boldish"><i class="fab fa-github"></i> : Github <a href="https://github.com/Jonbodoe" target="_blank" rel="noopener noreferrer">Link</a></div>
                    <div className="text-secondary boldish"><i class="fab fa-linkedin"></i> : Linkedin <a href="https://www.linkedin.com/in/jonathan-le-7336b71a0/" target="_blank" rel="noopener noreferrer">Link</a></div>
                </div>
                <div className="col-sm-6">
                </div>
            </div>
        </div>
}