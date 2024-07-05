package Day02;

public class Str {
    public static void main(String[] args) {
        // 기본타입 : int,double,byte,boolean,long
        // 참조타입 : String


        //상수 풀(수영장)
        //String만 가지고 있는 특징
        String name = "umm";
        String name1 = "umm";
        System.out.println(name == name1);

        int a = 1;
        int b = 1;

        String name2 = new String("kim");
        String name3 = new String("kim");
        System.out.println(name2 == name3);
        System.out.println(name2.equals(name3));
    }
}
