import React from 'react';
import works from '../works/worksInfo'

export default function Illustration() {
    return <React.Fragment>
        {
            works.map(element => {
                if (element.category === 'illustration') {
                    return <section className="py-3">
                        <div className="container my-5 shadow widget no-padding" >
                            <img className="img-fluid rounds" src={require(`../../img/${element.mainImg}`)} alt={element.description} />
                        </div>
                        <h3 className="font-weight-bolder text-secondary text-center">{element.title}</h3>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                    </section>
                }
            })
        }

    </React.Fragment>
}