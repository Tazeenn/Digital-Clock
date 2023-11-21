function digitalClock(){
    let dateObj = new Date()
    let selectedElem = document.getElementsByTagName('span')

    let curHours = dateObj.getHours()
    selectedElem[0].innerText = curHours

    let curMin = dateObj.getMinutes()
    selectedElem[1].innerText = curMin

    let curSec = dateObj.getSeconds()
    selectedElem[2].innerText = curSec

    let curDate = dateObj.getDate()
    selectedElem[3].innerText = curDate

    let curMonth = dateObj.getMonth()+1
    selectedElem[4].innerText = curMonth

    let curYear = dateObj.getFullYear()
    selectedElem[5].innerText = curYear



    let curDay = dateObj.getDay()
    switch(curDay){
        case 0 : curDay = "Sunday"
        case 1 : curDay = "Monday"
        case 2 : curDay = "Tuesday"
        case 3 : curDay = "Wednesday"
        case 4 : curDay = "Thursday"
        case 5 : curDay = "Friday"
        case 6 : curDay = "Saturday"
    }

    selectedElem[6].innerText = curDay  //6 is the array value of the span tag
   
}