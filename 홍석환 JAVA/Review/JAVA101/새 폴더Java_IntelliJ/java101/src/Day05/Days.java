package Day05;


//enumerate : 열거하다, 나열하다 -> obj[js(독점) - java()]
public enum Days {
    MONDAY(100), TUESDAY(200), WEDNESDAY(300), THURSDAY(400), FRIDAY(500), SATURDAY(600), SUNDAY(700);

    private final int dayNumber;

    Days(int dayNumber){
        this.dayNumber = dayNumber;
    }

    public int getDayNumber() {
        return this.dayNumber;
    }
}
