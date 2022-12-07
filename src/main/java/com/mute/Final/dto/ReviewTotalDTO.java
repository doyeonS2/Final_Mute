package com.mute.Final.dto;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import lombok.Data;
import java.time.LocalDateTime;

// 총평 후기 - 도연

@Data
public class ReviewTotalDTO {
    private Long reviewMuId; // 총평 후기 글 번호
    private Musical musical; // 공연 ID
    private Member member; // 회원번호
    private LocalDateTime writeDate; // 작성일
    private int scoreStory; // 스토리 별점
    private int scoreDirect; // 연출 별점
    private int scoreCast; // 캐스팅 별점
    private int scoreNumber; // 넘버 별점
    private double scoreAvgSeat; // 평균 좌석 별점
    private String reviewMuTxt; // 총평 후기 텍스트
}