package Day03;

public class Coffee {
    // Instance variables
    private String name;
    private int caffeine;
    private int price;

    // Constructor
    public Coffee(String n, int c, int p) {
        this.name = n;
        this.caffeine = c;
        this.price = p;
    }

    // Method to return coffee information
    public String getCoffeeInfo() {
        return "커피 이름: " + this.name + ", 커피 가격: " + this.price + ", 커피 카페인: " + this.caffeine;
    }

    // Main method to test the Coffee class
    public static void main(String[] args) {
        Coffee myCoffee = new Coffee("Latte", 150, 4500);
        System.out.println(myCoffee.getCoffeeInfo());
    }
