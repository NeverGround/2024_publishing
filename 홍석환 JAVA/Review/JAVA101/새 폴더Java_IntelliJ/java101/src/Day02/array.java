package Day02;

public class array {
    public static void main(String[] args) {
        // 배열[같은 타입의 변수가 여러 개 있는 것]
        // Type [] name = new Type[size]

//        int[] ages = new int[12];
//        ages[0] = 30;
//        ages[11] = 31;

        //정수형 배열 사이즈 10 만들고
        //0~9 인덱스에 10, 20, 30, 40..., 100 넣기
        int [] nums =new int[10];

        for(int i = 0; i < 10; i++) {
            nums[i] = (i+1) * 10;
        }
        }
    }

