package Day01;

import java.util.Scanner;

public class Scan {
    public static void main(String[] args) {

        Scanner a = new Scanner(System.in);

        System.out.println("당신의 나이는?");
        int age = a.nextInt();
        System.out.println("당신의 나이는" + age + "이군요!");
    }
}
