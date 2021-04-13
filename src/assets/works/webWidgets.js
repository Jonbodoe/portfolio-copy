import React from 'react';
import works from '../works/worksInfo'
// import {
//     useParams
// } from "react-router-dom";
// import SingleView from '../../components/singleView';
import {
    Link,
} from "react-router-dom";


export default function WebWidget() {
    return <section className="py-3">
        {
            works.map(element => {
                if (element.category === 'web') {
                    // console.log(element)
                    return <React.Fragment key={element.mainImg}>
                        <div className="container my-5 shadow widget bg-white" >
                            <div className="row">
                                <div className="col-lg-8">
                                    <img className="img-fluid " src={require(`../../img/${element.mainImg}`)} alt={element.mainImg} key={element.mainImg} />
                                </div>
                                <div className="col-lg-4 d-flex align-self-center px-sm-4">
                                    <div className="w-100">
                                        <h2 className="font-weight-bold pt-3">{element.topic}</h2>
                                        <h3 className="boldish text-primary">{element.title}</h3>
                                        <div className="boldish">{element.date}</div>
                                        <p>{element.objective}</p>
                                        <div className="boldish text-secondary">Tools:</div>
                                        {
                                            element.tools.map((icon, index) => {
                                                return <img className="icon" src={icon} alt="web languages" key={index} />
                                            })
                                        }
                                        <div className="py-4 d-flex justify-content-center">
                                            <Link to={`/works/${element.category}/${element.url}`}>
                                                <button type="button" className="btn button bg-orange text-center shadow-sm text-white">More Details ></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Switch>
                                <Route path={`/works/${element.category}/:view`} component={SingleView}/>
                            </Switch> */}
                    </React.Fragment>
                }
            })
        }
    </section>
}