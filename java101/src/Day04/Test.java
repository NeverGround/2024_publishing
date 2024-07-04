package Day04;

public class Test {
    public static void main(String[] args) {
        CollegeStudent collegeStudent = new CollegeStudent("Alice", 2, "Computer Science");
        System.out.println(collegeStudent.getStudentInfo());
        collegeStudent.study();
        collegeStudent.takeExam();

        MiddleStudent middleStudent = new MiddleStudent("Bob", 8);
        System.out.println(middleStudent.getStudentInfo());
        middleStudent.study();
        middleStudent.takeExam();
    }
}
