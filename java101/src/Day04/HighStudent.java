package Day04;

public class HighStudent extends  Student {
    public HighStudent(String name, int grade) {
        super(name, grade);
    }

    //오버라이딩


    @Override
    public String study() {

        return "고등학생이 수능공부를 준비합니다.";
    }
}
