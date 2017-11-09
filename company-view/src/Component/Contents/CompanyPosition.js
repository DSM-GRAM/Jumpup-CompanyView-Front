import React from 'react';
import './../main.css'

class CompanyPosition extends React.Component{
    render(){
        let summaryTechStack=" ";
        if(!!this.props.position.tech_stack) this.props.position.tech_stack.split("∙").splice(0,4).join("∙");

        return(
            <div className="work_info" id="work_info_two">
                <div className="work_info_box">
                    <h4 className="work_info_title">{this.props.position.position_name}</h4>
                    <h5 className="work_info_pay">{this.props.position.position_info}</h5>
                    <h5 className="work_info_stack">{summaryTechStack}</h5>
                </div>
            </div>
        )
    }  
}

export default CompanyPosition;