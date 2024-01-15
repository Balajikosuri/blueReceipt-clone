export const greetUser = (username) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "Good morning";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return `${greeting} ${username.split(" ")[0]}`;
};

export const getCurrentFormattedDate = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-In", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate);

  return formattedDate;
};

export const getFormattedNumberSystem = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};