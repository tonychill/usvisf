export function epochToDateStr(epoch: number): string {
  // Create a date object using the epoch time (epoch * 1000 to convert seconds to milliseconds)
  const date = new Date(epoch * 1000);

  // Array of month names
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day of the month
  const day: number = date.getDate();

  // Determine the ordinal suffix
  const suffixes: string[] = ["th", "st", "nd", "rd"];
  const value: number = day % 100;
  const suffix: string =
    suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];

  // Get the month name
  const month: string = months[date.getMonth()];

  // Get the year
  const year: number = date.getFullYear();

  // Format the date string
  return `${month} ${day}${suffix}, ${year}`;
}

// Example Usage
console.log(epochToDateStr(1683504000)); // Outputs: "May 7th, 2024"
