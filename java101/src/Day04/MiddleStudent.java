package Day04;

public class MiddleStudent extends Student {
    public MiddleStudent(String name, int grade) {
        super(name, grade);
    }

    @Override
    public String study() {
        System.out.println(getName() + " is studying for middle school.");
        return null;
    }

    @Override
    public void takeExam() {
        System.out.println(getName() + " is taking a middle school exam.");
    }

    @Override
    public String getStudentInfo() {
        return super.getStudentInfo() + ", Type: Middle School Student";
    }
}
