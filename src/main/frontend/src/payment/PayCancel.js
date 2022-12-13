import React from "react";
import axios from "axios";

class PayCancel extends React.Component {
    state = {
        next_redirect_pc_url: "",
        tid: "",
        params: {
            cid: "TC0ONETIME",
            // 결제 고유번호
            tid: window.localStorage.getItem("tid"),
            // 취소 금액 요청
            cancel_amount: "125000",
            // 취소 비과세 금액
            cancel_tax_free_amount:"20000",
        }
    };
    componentDidMount() {
        const { params } = this.state;
        // const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

        axios({
          // 요청 url
          url: "/v1/payment/cancel",
          // 요청 method
          method: "POST",
          // 요청 key
          headers: {
            // Authorization: `KakaoAK ${KAKAO_API_KEY}`,
            Authorization: "KakaoAK ae48346fee13402c7f4406773e04336b",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          params,
        }).then((response) => {
          const {
            data: {tid}
          } = response;
          this.setState({ tid });
          console.log(response);
        });
      }
    render() {
        return (
            <div>
                <h1>결제 취소 페이지</h1>
            </div>
        );
    }
}

export default PayCancel;