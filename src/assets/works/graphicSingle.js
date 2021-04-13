import React from 'react';

import {
  useParams
} from "react-router-dom";
import works from "../../assets/works/worksInfo"

export default function GraphicsView() {
  let { view } = useParams();
  let infos = works.filter((work) => {
    return work.url === view
  })
  let work = infos[0]


  return <React.Fragment>
    <div className="spacer"></div>
    <section className="no-padding px-sm-5">
      <div className="row">
        <div className="col-lg-7">
          <img className="img-fluid rounds no-padding shadow-md" src={require(`../../img/${work.mainImg}`)} alt={work.title + ' website image'} />
        </div>
        <div id="intro" className="col-lg-5 d-flex">
          <div className="align-self-center px-5">
            <h2 className="font-weight-bold text-dark pt-3">{work.title}</h2>
            <h3 className="text-primary">{work.topic}</h3>
            <div className="text-secondary">{work.level}</div>
            <div className="py-4">
              <div className="pt-2">
                <div className="boldish text-secondary">Objective :</div>
                {work.description}
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <section className="py-5">
        <div className="row p-sm-3">
          <div className="col-lg-4 boldish d-flex justify-content-center">
            <div className="align-self-start px-5">
            <div className="spacer"></div>
              <h3 className="font-weight-bold text-primary">Background</h3>
              <h3 className="text-secondary">Concept & Ideating</h3>
              <div className="py-4">
              <p className="pt-3">
                {work.concept}
              </p>
              {
                  view === 'septa' ? 
                  <React.Fragment>
                    <p>{work.logos}</p>
                    <p>{work.type}</p>
                    <p>{work.web}</p>
                  </React.Fragment> :
                  ""
                }
                </div>
            </div>
          </div>
          <div className="col-lg-8 text-dark d-flex justify-content-center">
            <div>
            {
              work.listImg.map((img) => {
                return <div className="pb-5" key={img}>
                  <img key={img} className={work.horizontalImgs ? "img-majority rounds shadow-md" : "img-fluid rounds shadow-md"} src={require(`../../img/${img}`)} alt={`list of ${work.title}`} />
                </div>
              })
            }
            {
              work.secondaryImg ?
                <img className="img-majority rounds shadow-md" src={require(`../../img/${work.secondaryImg}`)} alt={`large version ${work.title}`} />
                : ''
            }
            </div>
          </div>
        </div>
      </section>
    </section>
    {/* <section className="container-fluid py-5 my-5">
      <div className="row">
        <div className="col-md-6 boldish d-flex justify-content-center">
          <div className="align-self-center p-sm-5 bg-white rounds shadow-md w-100">
            <div className="py-4">
              <h3 className="font-weight-bolder product text-primary">Product</h3>
              <h3 className="text-secondary boldish">View in PDF!</h3>
              <div className="text-dark">

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 boldish p-4">
          <Link to={`/works/graphics/concept-graphics/viewer`}>Link</Link>
        </div>
      </div>
    </section> */}
  </React.Fragment>

}