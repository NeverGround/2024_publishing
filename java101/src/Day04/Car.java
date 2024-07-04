package Day04;



// 직접적인 관계  <->  간접적인 관계 
// (A <-> B)    <->   (A  -  I  -  B)
public class Car {
    private Engine engine;

    public Car() {
        this.engine = new Engine();
    }
    public  void start(){
        this.engine.start();
    }
}
