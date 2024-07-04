package Day04;

public class Car1 {
    public static void main(String[] args) {
        //A - I - B(간접적인 관계)
        DieselEngine dieselEngine = new DieselEngine();
        Car1 k7 = new Car1(dieselEngine);
        k7.start();

        ElecEngine elecEngine = new ElecEngine();
        Car1 tesla = new Car1(elecEngine);
        tesla.start();

        Car tico =new Car();
        tico.start();
    }
}
