package Day02;

import java.util.Scanner;

public class Loop {
    // 조건문(if, switch)
    // if vs switch
    // if [optional] vs switch[mandatory]
    //

    // 반복문(for, while)

    // for[언제 끝날지 알고] vs while [언제 끝날지 모름]
    // 프로그래머가 끝을 정할 수 있고 vs 유저가 끝을 정할 수 있음
    // (start, end, 증감식)
    public static void main(String[] args) {
        // for 반복문
        for(int i = 0; i < 10; i++) {
            System.out.println("안녕하세요");
        }

        // while 반복문
        Scanner sc = new Scanner(System.in);

        while(true) {
            System.out.println("커피 프로그램");
            System.out.println("1. 커피 판매 2. 커피 추가 3. 프로그램 종료");
            String systemNumber = sc.nextLine();

            if(systemNumber.equals("3")) {
                System.out.println("프로그램 종료!");
                break;
            } else if(systemNumber.equals("1")) {
                System.out.println("커피 판매를 선택하셨습니다.");
                // Add additional handling for selling coffee if needed
            } else if(systemNumber.equals("2")) {
                System.out.println("커피 추가를 선택하셨습니다.");
                // Add additional handling for adding coffee if needed
            } else {
                System.out.println("잘못된 입력입니다. 다시 선택해주세요.");
            }
        }

        sc.close();
    }
}
