package Day05;

//Request 메소드:get,post
//Response 상태:200,400,500
// 자바의 한계: 객체화[유연성 떨어짐]

public enum HTTPS {
    OK(200), NOT_FOUND(400), SERVER_ERROR(500);
    private final int Status;
    HTTPS(int status) {
        this.Status = status;
    }
    public int getStatus() {
        return Status;
    }
}
