// Need to use react-router to link
import React from 'react';

import {
  useParams
} from "react-router-dom";
import works from "../assets/works/worksInfo"
import WebView from "../assets/works/webSingle";
import GraphicsView from "../assets/works/graphicSingle"
import PDFviewer from "../components/Viewer"
import {
  //   BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // useParams,
  // useRouteMatch,
  // withRouter
} from "react-router-dom";

export default function SingleView() {
  let { view } = useParams();
  let single = works.filter((work) => {
    return work.url === view
  })
  let category = single[0].category
  return <React.Fragment>
    {
      category === 'web' ? <WebView /> : <GraphicsView />
    }
    <Switch>
      <Route path={`works/graphics/${view}/viewer`}>
        <PDFviewer />
      </Route>
    </Switch>
  </React.Fragment>
}



