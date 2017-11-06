import React from 'react';
import CompanyCard from './CompanyCard';
import './../main.css'

class ContentWrapper extends React.Component{
    render(){
        return(
            <div id="content"> 
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>  
            </div>
        )
    }
}

export default ContentWrapper;