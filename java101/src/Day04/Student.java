package Day04;

public class Student {
    private String name;
    private int grade;
    protected String school;

    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    public String study() {
        System.out.println(name + " is studying.");
        return null;
    }

    public void takeExam() {
        System.out.println(name + " is taking an exam.");
    }

    public String getStudentInfo() {
        return "Name: " + name + ", Grade: " + grade;
    }
}
