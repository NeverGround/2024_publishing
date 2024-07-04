package Day03;

public class Speed {
    public static void main(String[] args) {
        private String name;
        private int caffeine;
        private int price;

    public Coffee(String name, int caffeine, int price) {
            this.name = name;
            this.caffeine = caffeine;
            this.price = price;
        }

        public String intro() {
            return "커피 이름: " + name + ", 카페인: " + caffeine + "mg, 가격: " + price + "원";
        }
    }
}
