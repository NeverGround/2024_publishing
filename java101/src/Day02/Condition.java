package Day02;

import java.util.Scanner;

public class Condition {

    public static void main(String[] args) {
        int age = 13;

        if(age >= 20) {
            System.out.println("성인입니다.");
        } else if (age > 13) {
            System.out.println("청소년입니다.");
        } else {
            System.out.println("아동입니다.");
        }

        Scanner sc = new Scanner(System.in);
        System.out.print(1  );
        int num = sc.nextInt();

        boolean isPositive = num > 0;
        boolean isNegative = num < 0;
        boolean isOdd = num % 2 != 0;
        boolean isEven = num % 2 == 0;

        if (isPositive && isOdd) {
            System.out.println("양의 홀수입니다.");
        } else if (isPositive && isEven) {
            System.out.println("양의 짝수입니다.");
        } else if (isNegative && isOdd) {
            System.out.println("음의 홀수입니다.");
        } else if (isNegative && isEven) {
            System.out.println("음의 짝수입니다.");
        } else {
            System.out.println("0입니다.");
        }

        sc.close();
    }
}
