import React from 'react';
import styles from './main.css'

class Category extends React.Component{
    render(){
        console.log(styles);
        return(
            <div id="side">
                <img id="logo" src="logo.png" alt="이미지가 없습니다."/>

                <div id="process_area">
                    <div id="pointA"></div>
                    <div id="textA">웹 개발자</div>
                    <div id="pathA"></div>
                    <div id="pointB"></div>
                    <div id="textB">앱 개발자</div>
                    <div id="pathB"></div>
                    <div id="pointC"></div>
                    <div id="textC">게임 개발자</div>
                    <div id="pathC"></div>
                    <div id="pointD"></div>
                    <div id="textD">서버 개발자</div>
                    <div id="pathD"></div>
                    <div id="pointE"></div>
                    <div id="textE">시스템 개발자</div>
                    <div id="pathE"></div>
                    <div id="pointF"></div>
                    <div id="textF">보안 전문가</div>
                    <div id="pathF"></div>
                    <div id="pointF"></div>
                </div>
            </div>
        )
    }
}

export default Category;