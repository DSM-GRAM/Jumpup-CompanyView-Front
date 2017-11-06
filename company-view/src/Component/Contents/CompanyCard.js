import React from 'react';
import './../main.css'

class CompanyCard extends React.Component{
    render(){
        return(
            <div className="card" id="card1">
            <img className="company_image"/>
            <div className="logo_area">
                <img className="company_logo" src="company.jpg"/>
            </div>
            <h1 className="company_name">Plus TV</h1>
            <h4 className="company_address">대한민국 경기도 어쩌구</h4>
            <div className="title_info">기업정보</div>
            <h4 className="company_info">설립일 : 2000-04-29</h4>
            <h4 className="company_info">구성원 : 1 - 10명</h4>
            <h4 className="company_info">이메일 : alswl4152@naver.com</h4>
            <h3 className="company_major">모바일 서비스, 웹 서비스, 소프트웨어</h3>
            <h3 className="company_intro">Plus TV는 플러스 티비라고 읽으며 구성원은 몇명이고 대표님은 그램 멘토님이시다. 그러하고 그러하며 배틀 그라운드는 재미있으며 재미있다고 한다.</h3>
            <div className="title_info">취업정보</div>
            <div className="work_info" id="work_info_one">
                <div className="work_info_box">
                    <h4 className="work_info_title">웹 어플리케이션 개발자</h4>
                    <h5 className="work_info_pay">최소 3000만원 / 경력</h5>
                    <h5 className="work_info_stack">JavaScript, React.js, Redux, Angular, Election</h5>
                </div>
            </div>

            <div className="work_info" id="work_info_two">
                <div className="work_info_box">
                    <h4 className="work_info_title">웹 어플리케이션 개발자</h4>
                    <h5 className="work_info_pay">최소 3000만원 / 경력</h5>
                    <h5 className="work_info_stack">JavaScript, React.js, Redux, Angular, Election</h5>
                </div>
            </div>
        </div>   
        )
    }  
}

export default CompanyCard;