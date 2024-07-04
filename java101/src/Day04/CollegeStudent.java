package Day04;

public class CollegeStudent extends Student {
    private String course;

    public CollegeStudent(String name, int grade, String course) {
        super(name, grade);
        this.course = course;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    @Override
    public String study() {
        System.out.println(getName() + " is studying for the course: " + course);
        return null;
    }

    @Override
    public void takeExam() {
        System.out.println(getName() + " is taking an exam in the course: " + course);
    }

    @Override
    public String getStudentInfo() {
        return super.getStudentInfo() + ", Course: " + course;
    }
}
