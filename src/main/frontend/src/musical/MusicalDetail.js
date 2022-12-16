import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import Modal from "../util/Modal";
import heartIcon from "../images/heart.png";
import heartIcon2 from "../images/heart2.png";
import Review from "../review/Review";
import { useNavigate } from "react-router-dom";

const MusicalDetail = (props) => {
    const navigate = useNavigate();
    const [musicalDetail,setMusicalDetail] = useState();
    const musicalId = window.localStorage.getItem("musicalId"); // 선택한 musicalId
    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 로그인할 경우 저장한 userNum

    const [wish, setWish] = useState(false);
    const [modalWishReg, setModalWishReg] = useState(false); // 찜 등록했을 경우
    const [modalWishCancel, setModalWishCancel] = useState(false); // 찜 취소했을 때 
    const [modalNotLogin, setModalNotLogin] = useState(false); // 로그인 안했을 경우

    const closeModalWishReg = () => {
        setModalWishReg(false);
    }

    const closeModalWishCancelN = () => {
        setModalWishCancel(false);
    }

    const closeModalWishCancelY = async () => {
        try {
            console.log("wish취소 userNum : " + userNum);
            console.log("wish취소 musicalId : " + musicalId);
            await MuteApi.wishCancel(userNum, musicalId);
            setModalWishCancel(false);
            setWish(!wish);
        } catch (e) {
            console.log(e + "찜 취소 통신 실패")
        }    
    }

    const closeModalNotLogin= () => {
        setModalNotLogin(false);
        navigate('/Login'); // 로그인페이지로 이동 
    }

  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalDetail(musicalId); // 받은 musicalId 서버로 넘겨주기
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }     
      };
      MusicalData();
  }, []);

  
  const OnClickPoster = (e) => {
  }

  const OnClickWish = async() => {
        try {
            const response = await MuteApi.wishReg(userNum, musicalId); // musicalId와 userNum으로 찜 상품 등록
            setWish(response.data);
        }
     catch (e) {
        console.log(e);
    }
    if(userNum) {
        if(wish === false) {
            setModalWishReg(true);
        } else {
            setModalWishCancel(true);
        }
    } else {
        setModalNotLogin(true);
    }
  }


  return(
      <>
        {/* wish 등록 */}
        <div onClick={() => OnClickWish()}>
            <div className={(wish ? "likeBtn" : "notLikeBtn")}>
            <p className="wish"><img src={wish ? heartIcon : heartIcon2} alt={heartIcon} width="30px"></img></p>
            </div>
        </div>
        
        {musicalDetail && musicalDetail.map(e => (        
            <div onClick={() => OnClickPoster(e.musicalId) }>
            <img alt="poster" src={e.musicalPoster}/>
            <p className="title">{e.musicalName}</p>
            <p className="theaterName">{e.theaterName}</p>
            <p className="startDate">{e.musicalStart}</p>
            <p className="endDate">{e.musicalEnd}</p>
            <p className="status">{e.musicalStatus}</p>
            <p className="casting">{e.musicalCast}</p>
            <p className="ageLimit">{e.musicalAge}</p>
            <p className="price">{e.musicalPrice}</p>
            <p className="plan">{e.musicalPlan}</p>
            </div>
        ))}

        <Review/>

        {modalWishReg && <Modal open={modalWishReg} close={closeModalWishReg} header="&nbsp;">뮤지컬 찜 완료</Modal>}
        {modalWishCancel && <Modal open={modalWishCancel} confirm = {closeModalWishCancelY} close={closeModalWishCancelN} header='취소'>찜하기를 취소하시겠습니까?</Modal>}
        {modalNotLogin && <Modal open={modalNotLogin} close={closeModalNotLogin} header="&nbsp;">로그인 후 이용하시기 바랍니다.</Modal>}
      
      </>
  );
}

export default MusicalDetail;