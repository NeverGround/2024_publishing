package Day03;

public class Car {
    private String company;
    private String modelName;
    private int madeYear;
    private int velocity;

    public Car(String company, String modelName, int madeYear) {
        this.company = company;
        this.modelName = modelName;
        if (madeYear < 1900) {
            System.out.println("데이터 입력 오류");
            this.madeYear = 1900; // Setting a default value in case of invalid input
        } else {
            this.madeYear = madeYear;
        }
        this.velocity = 0; // Initialize velocity to 0
    }

    public String getCompany() {
        return company;
    }

    public String getModelName() {
        return modelName;
    }

    public int getMadeYear() {
        return madeYear;
    }

    public int getVelocity() {
        return velocity;
    }

    // 속도 올리는 함수
    public void speedUp() {
        if (this.velocity >= 120) {
            this.velocity = 120;
        } else {
            this.velocity++;
        }
    }

    // 속도 내리는 함수
    public void speedDown() {
        if (this.velocity <= 0) {
            this.velocity = 0;
        } else {
            this.velocity--;
        }
    }
}

// Separate class with main method to test the Car class
public class TestCar {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry", 2021);
        System.out.println("Company: " + myCar.getCompany());
        System.out.println("Model Name: " + myCar.getModelName());
        System.out.println("Made Year: " + myCar.getMadeYear());
        System.out.println("Initial Velocity: " + myCar.getVelocity());

        // Test speedUp and speedDown methods
        myCar.speedUp();
        System.out.println("Velocity after speedUp: " + myCar.getVelocity());

        myCar.speedDown();
        System.out.println("Velocity after speedDown: " + myCar.getVelocity());
    }
}
