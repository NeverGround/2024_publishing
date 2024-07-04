package Day03;

import java.util.Scanner;

public class OOP {
    public static void main(String[] args) {
        Student[] ITschool = new Student[5];
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < 5; i++) {
            ITschool[i] = new Student();
            System.out.print("Enter name: ");
            ITschool[i].name = sc.nextLine();
            System.out.print("Enter grade: ");
            ITschool[i].grade = sc.nextInt();
            sc.nextLine(); // consume the newline character
            System.out.print("Enter gender: ");
            ITschool[i].gender = sc.nextLine();

            System.out.println("Name: " + ITschool[i].name);
            System.out.println("Grade: " + ITschool[i].grade);
            System.out.println("Gender: " + ITschool[i].gender);
        }

        Student umm = new Student();
        umm.name = "엄준식";
        umm.grade = 3;
        umm.gender = "남자";

        System.out.println(umm.name);
        System.out.println(umm.introduce());

        Coffee cf = new Coffee("준식커피", 200, 3000);
        System.out.println(cf.intro());

        Coffee cf1 = new Coffee("킹받커피", 100, 5000);
        System.out.println(cf1.intro());

        sc.close();
    }
}
