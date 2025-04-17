import { format } from "date-fns";

// get the suffix for the date
const getOrdinal = (n: number): string => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

export const getFormattedDate = (currentDate: Date): string => {
  const day = format(currentDate, "d"); // get the day of the month
  const ordinalDay: string = `${day}${getOrdinal(parseInt(day))}`;
  // Format the full date string
  const formatted: string = `${format(
    currentDate,
    "EEEE"
  )} ${ordinalDay} ${format(currentDate, "MMMM, yyyy")}`;
  return formatted;
};
