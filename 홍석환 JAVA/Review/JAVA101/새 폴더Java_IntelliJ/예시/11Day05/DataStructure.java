package Day05;

import java.util.*;


// Wrapper, Object
// ENUM[열거형 상수] -> Object Kotlin
// Try-Catch(런타임 에러 막는 문법) - Exception
// Collection[자바용 자료구조 클래스]





// JS: Object, Array -> data_structure[자료구조]: 데이터를 저장하는 방법 ㅅㄱ
// Collection
// List[리스트], Map[K-V], Set[집합], Stack[층], Queue[대기열]
// Tree[검색어], Graph[그래프]
public class DataStructure {
    public static void main(String[] args) {
        ArrayList<String> soccer = new ArrayList<>();
        soccer.add("손흥민");
        soccer.add("희찬이형");
        soccer.add("김민재");

        HashSet<String> coffee = new HashSet<>();
        coffee.add("아메리카노");
        coffee.add("라떼");
        coffee.add("아메리카노");


        Map<Integer, String> map = new HashMap<>();
        map.put(1, "다이소");
        map.put(2, "올리브영");
        map.put(3, "gs25");

        Map<String, ArrayList<Integer>> map1 = new HashMap<>();
        ArrayList<Integer> num = new ArrayList<>();
        map1.put("사과", num);
        num.add(1);
        num.add(2);
        num.add(3);




    }
}
