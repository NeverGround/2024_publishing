type HolidayColor = "blue" | "red";
type WeekdayColor = "black";

export const changeColorbyDay = (day: number) => {
  const dayColorMap: { [key: number]: string } = {
    0: "red",
    6: "blue",
  };
  return dayColorMap[day] || "black";
  // return day == 0 ? "red" : day == 6 ? "blue" : "black";
};
