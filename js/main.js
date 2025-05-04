// const SunsetTime = document.querySelector("#SunsetTime");
// const SunriseTime = document.querySelector("#SunriseTime");
// const FajrAzan = document.querySelector("#FajrAzan");
// const ZuhrAzan = document.querySelector("#ZuhrAzan");
// const AsrAzan = document.querySelector("#AsrAzan");
// const MaghribAzan = document.querySelector("#MaghribAzan");
// const IshaAzan = document.querySelector("#IshaAzan");

// function to12HourFormat(time24) {
//   const [hourStr, minute] = time24?.split(":");
//   let hour = parseInt(hourStr, 10);
//   const ampm = hour >= 12 ? "PM" : "AM";
//   hour = hour % 12 || 12;
//   return `${hour}:${minute} ${ampm}`;
// }

// async function getPrayerTimes12() {
//   const url =
//     "https://api.aladhan.com/v1/timingsByCity?city=Alexandria&country=Egypt&method=5";

//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     const timings = result.data.timings;

//     console.log(timings);

//     const Fajr = to12HourFormat(timings.Fajr);
//     const Sunrise = to12HourFormat(timings.Sunrise);
//     const Dhuhr = to12HourFormat(timings.Dhuhr);
//     const Asr = to12HourFormat(timings.Asr);
//     const Maghrib = to12HourFormat(timings.Maghrib);
//     const Sunset = to12HourFormat(timings.Sunset);
//     const Isha = to12HourFormat(timings.Isha);

//     SunsetTime.innerHTML = Sunset;
//     SunriseTime.innerHTML = Sunrise;
//     FajrAzan.innerHTML = Fajr;
//     ZuhrAzan.innerHTML = Dhuhr;
//     AsrAzan.innerHTML = Asr;
//     MaghribAzan.innerHTML = Maghrib;
//     IshaAzan.innerHTML = Isha;

//     console.log(FajrAzan);
//   } catch (error) {
//     console.error("Error fetching prayer times:", error);
//   }
// }

// getPrayerTimes12();


console.log("Hello World! from main.js");