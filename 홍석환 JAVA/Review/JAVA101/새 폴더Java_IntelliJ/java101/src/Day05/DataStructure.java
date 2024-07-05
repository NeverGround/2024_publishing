package Day05;

// Import necessary packages
import java.util.*;

public class DataStructure {
    public static void main(String[] args) {
        // Using ArrayList to store soccer player names
        ArrayList<String> soccer = new ArrayList<>();
        soccer.add("손흥민");
        soccer.add("황희찬");
        soccer.add("김민재");

        // Using HashSet to store coffee types
        HashSet<String> coffee = new HashSet<>();
        coffee.add("아메리카노");
        coffee.add("라떼");
        coffee.add("아메리카노"); // This will not be added again as sets do not allow duplicates

        // Using HashMap to store key-value pairs
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "다이소");
        map.put(2, "올리브영");
        map.put(3, "gs25");

        // Initializing and using a HashMap with a list of integers
        Map<String, ArrayList<Integer>> map1 = new HashMap<>();
        ArrayList<Integer> num = new ArrayList<>(); // Initialize the ArrayList before adding elements
        num.add(1);
        num.add(2);
        num.add(3);
        map1.put("사과", num);

        // Print the value associated with key 1 in the first map
        System.out.println(map.get(1));
    }
}
