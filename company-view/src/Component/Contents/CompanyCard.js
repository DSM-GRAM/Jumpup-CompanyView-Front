import React from 'react';
import './../main.css'
import CompanyInfo from './CompanyInfo';
import WorkInfoCard from './WorkInfoCard';
import CompanyImage from './CompanyImage';
import CompanyLogoImage from './CompanyLogoImage';

class CompanyCard extends React.Component{
    render(){
        return(
            <div className="card" id="card1">
                <CompanyImage/>
                <CompanyLogoImage/>
                <CompanyInfo/>

                <div className="title_info">취업정보</div> 
                
                <WorkInfoCard/>
            </div>   
        )
    }  
}

export default CompanyCard;