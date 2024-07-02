package Day02;

import java.util.Scanner;

public class review {
    public static void main(String[] args) {
        Scanner a =new Scanner(System.in);
        System.out.println("한 변의 길이 입력:");
        int side = a.nextInt();
        System.out.println("정사각형의 넓이:" + side * side);
    }
}
