import React from 'react';
import {
  //   BrowserRouter as Router,
  useParams
} from "react-router-dom";
import categories from '../home/category'


export default function WorkTitle() {
  let { subId } = useParams();
  let title = categories.map(element => {
    return <React.Fragment key={element.id}>
      {subId === element.id ? element.title : ''}
    </React.Fragment>
  });
  return <React.Fragment>
    <div className={subId ? subId : ''}>
      <div className='text-center py-5 header-topic'>
        <h1 className="font-weight-bolder pt-5 text-dark">{subId.toUpperCase()}</h1>
        <h2 className="text-secondary pb-5">{title}</h2>
      </div>
    </div>

  </React.Fragment>


}