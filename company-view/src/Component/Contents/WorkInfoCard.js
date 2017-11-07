import React from 'react';
import './../main.css'

class WorkInfoCard extends React.Component{
    render(){
        return(
            <div class="work_info" id="work_info_two">
                <div class="work_info_box">
                    <h4 class="work_info_title">웹 어플리케이션 개발자</h4>
                    <h5 class="work_info_pay">최소 3000만원 / 경력</h5>
                    <h5 class="work_info_stack">JavaScript, React.js, Redux, Angular, Election</h5>
                </div>
            </div>
        )
    }  
}

export default WorkInfoCard;