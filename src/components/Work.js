import React from 'react';
import {
  //   BrowserRouter as Router,
  Route,
  Switch,
  Link,
  // useParams,
  // useRouteMatch,
  withRouter
} from "react-router-dom";
import WorkTitle from "../assets/works/worksTitle"
import categories from "../assets/home/category.js"
import Works from "../assets/works/works"
import Footer from "../components/Footer";

function Work() {
  let workCategory = categories.map((category) => {
    return <React.Fragment key={category.title}>
      <Link className="col-sm-4 category-section shadow-md" to={`/works/${category.id}`}>
        <div className="category-container">
          <div id={category.id} className="category"></div>
        </div>
        <div className={category.color + ' py-2'}>
          <p className="text-center text-white boldish category-text">{category.title}</p>
        </div>
      </Link>
    </React.Fragment>
  })
  let categoryLinks = categories.map((category => {
    return <React.Fragment key={category.title}>
      <Link className={"col-sm-4 d-flex justify-content-center py-3 " + category.color} to={`/works/${category.id}`}>
        <h6 className="align-self-center text-white boldish">{category.title}</h6>
      </Link>
    </React.Fragment>
  }))
  return <React.Fragment>
    <section className="container-fluid pt-5 mt-2 page no-padding">
      <Switch>
        <Route exact path='/works'>
          <div className="text-center py-4">
            <h2 className="font-weight-bolder pt-5 text-dark">Choose A Category</h2>
          </div>
          <div className="row pb-3">
            {workCategory}
          </div>
          <Footer/>
        </Route>
        <Route path='/works/:subId'>
          <WorkTitle />
          <div id="topics" className="row shadow-md">
            {categoryLinks}
          </div>
        </Route>
      </Switch>
      <Route path='/works/:type'>
        <Works />
      </Route>
    </section>
  </React.Fragment>
}

export default withRouter(Work)