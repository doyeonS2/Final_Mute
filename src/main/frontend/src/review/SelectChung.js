import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";
import TheaterChung from "../theaterInfo/TheaterChung";
 
// 충무아트 좌석 선택

const SelectChung = () => {
    const navigate = useNavigate();

    const [theaterName, setTheaterName] = useState(); 
    const [seatNum, setSeatNum] = useState();

    const SelectBtn = () => {
        window.localStorage.setItem("TheaterName", theaterName);
        window.localStorage.setItem("seatNum", seatNum);
        console.log("저장한 setTheaterName : " + theaterName)
        console.log("저장한 seatNum : " + seatNum)

        navigate("/ReviewSeat");
    }

    return (
        <div>
            <p value={theaterName}>충무아트센터</p>
            <button onclick={SelectBtn}>선택하기</button>
            <TheaterChung/>
        </div>
    )
}

export default SelectChung;