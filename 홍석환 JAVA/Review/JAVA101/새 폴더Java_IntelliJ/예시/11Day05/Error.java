package Day05;

import java.sql.SQLException;

// 3대 에러: 컴파일 에러[문법 에러], 런타임 에러[실행중 에러], 컨텍스트 에러[QA Test팀]
// 컴파일 언어(자바,코틀린,C,C#,TS) vs 인터프리터 언어(JS,Python)
// 문법이 강력 vs 자유도 강력
public class Error {
    public static void main(String[] args) {
        //try-catch [if문이랑 똑같]
        //실행 중 일어날 오류: 1.네트워크 오류[웹 서버] 2.DB 데이터 조회
        // 네트워크 연결하는 코드 OR DB 데이터 조회 코드
        try{

        }catch(Exception e){
            e.printStackTrace();
            System.out.println("에러 발생");
        }
    }
}
