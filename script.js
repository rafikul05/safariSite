const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icon span");
//getting new date , current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


const Months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth,1).getDate(), //getting first date of the month
    lastDateofMonth = new Date(currYear, currMonth +1,0).getDate(), //getting last date of the month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //getting last day of the month
    lastDateofLastMonth = new Date(currYear, currMonth ,0).getDate(); //getting last date of previous month

    let liTag = "";
    for(let i =firstDayofMonth; i > 0; i--){
        liTag += `<li class = "inactive">${lastDateofLastMonth -i +1}</li>`;
    }


   for(i=1; i<= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
                liTag += `<li class="${isToday}">${i}</li>`;
   }

   for(let i = lastDayofMonth; i<5; i++){
        liTag += `<li class = "inactive">${i - lastDayofMonth +1}</li>`;
   }
    currentDate.innerText = `${Months[currMonth]} ${currYear}`;
    daysTag.innerHTML=liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        currMonth = icon.id === "prev" ? currMonth -1: currMonth +1;
        renderCalendar();
    });
})