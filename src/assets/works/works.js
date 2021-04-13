import React from 'react';
import Footer from '../../components/Footer';
import WebWidgets from './webWidgets'
import {
    Switch,
    Route,
} from "react-router-dom";
import SingleView from '../../components/singleView';
import Illustration from '../works/illustrationWidgets'
import GraphicWidget from '../works/graphicWidgets'

export default function Works() {
    return <React.Fragment>
        <Switch>
            <Route exact path="/works/illustration" render={ () => <Illustration/>}/> 
            <Route exact path="/works/web" render={ () => <WebWidgets/>}/>
            <Route exact path="/works/graphics" render={ () => <GraphicWidget/>}/>  
            <Route path="/works/web/:view" render={ () => <SingleView/>}/>
            <Route path="/works/graphics/:view" render={ () => <SingleView/>}/>
        </Switch>
        <Footer />
    </React.Fragment>
}