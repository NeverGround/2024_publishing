package Day03;public class Review {
    public static void main(String[] args) {
        //복습퀴즈 : 유저에게 커피 메뉴 3개 물어보고
        // 3개르 모두 출력하기

        Scanner sc = new Scanner(System.in);

        String[] coffee = new String[3];
        for(int i=0;i<3;i++){
            System.out.println(i+"번째 커피 입력:");
            coffee[i] = sc.nextLine();
        }
        for(int i=0; i<3; i++){
            System.out.println(i + "번째 커피는" + coffee[i]);
        }

    }
}