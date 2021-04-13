import React from 'react';
import categories from "./category";
import Work from "../../components/Work"
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

let workCategory = categories.map((category) => {
  return <React.Fragment key={category.title}>
    <Link className="col-sm-4 category-section shadow-md" to={`/works/${category.id}`}>
      <div className="category-container">
        <div id={category.id} className="category"></div>
      </div>
      <div className={category.color + ' py-3'}>
        <p className="text-center text-white boldish category-text">{category.title}</p>
      </div>
    </Link>
    <Switch>
      <Route path='/works'>
        <Work />
      </Route>
    </Switch>
  </React.Fragment>

})

export default workCategory;