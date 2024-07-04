package Day01;

import java.util.Scanner;

public class Scan {
    public static void main(String[] args) {

                Scanner a = new Scanner(System.in);

                System.out.println("당신의 나이는?");
                int age = a.nextInt();
                System.out.println("당신의 나이는 " + age + " 이군요!");

        //당신의 태어난 년도 프로그램
        // 1. 당신은 몇년생인가요?
        // 2. 년도 입력 후
        // 3. 당신은 ~~년도 생이고 현재 나이는 ~!살이군요

                System.out.println("당신은 몇년생인가요?");
                int year = a.nextint();
                System.out.println("당신은" + year + "년도 생이고 현재 나이는" + (2024-year) + "~!살이군요." );
                a.nextLine();  //string
                a.nextDouble(); // double
    }
}
