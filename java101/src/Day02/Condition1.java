package Day02;

public class Condition1 {
    public static void main(String[] args) {

        String day = "월"; // Corrected from 'string' to 'String'

        // 정수 & 문자열
        switch (day) {
            case "월":
                System.out.println("월요병 걸리는 날");
                break;
            case "화":
                System.out.println("화병 나는 날");
                break;
            case "수":
                System.out.println("수전증 걸리는 날");
                break; // Added missing break
            case "목":
                System.out.println("은근 기분 째지는 날");
                break;
            case "금":
                System.out.println("에러나도 기분 째지는 날");
                break;
            default:
                System.out.println("위에 해당 되는 케이스가 없음");
        }
    }
}
