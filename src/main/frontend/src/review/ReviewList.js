import React from "react";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs';


// 뮤지컬 총평 후기 view - 도연 작업중..

const ReviewList = () => {

    // 생각해보니 검색이 필요없음..
    // why? => 이미 뮤지컬과 극장이 선택된 상태에서 후기 탭을 연거니까...
   
    // // 검색창
    // const [muInput, setMuInput] = useState("");

    // const onChangeInput = (e) => {
    //     setMuInput(e.target.value)
    // };

    // // 검색창 Api
    // const onClickInput = async() => {
    //     window.localStorage.setItem("input", muInput)
    // }




    return(
        <>
        {/* <input onChange={onChangeInput} placeholder="뮤지컬 제목으로 검색"/>
        <button type="button" onClick={onClickInput}><BsSearch/></button> */}
        <h3>뮤지컬 관람 후기</h3>
        <fieldset>
            <p>회원 총 평점 [{}]</p>
        </fieldset>
        <fieldset>
            <span>아이디 []</span><p>총점 [{}]</p>
            <span>스토리 []</span> 
            <span>연출 []</span> 
            <span>캐스팅 []</span> 
            <span>넘버 []</span>
            <p>텍스트 []</p>
        </fieldset>
    
        </>
    )
}
export default ReviewList;