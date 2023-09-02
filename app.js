const newYear = document.querySelector(".new-year")
const deadline = document.querySelector(".deadline")
const timeRemaining = document.querySelectorAll("div h4")


const futureDate = new Date(2024,0, 1, 0, 0)
const formatDate = moment(futureDate).format("MMMM Do, YYYY")
newYear.textContent = `This countdown timer ends on ${formatDate}`

const futureTime = futureDate.getTime()

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today

    //one sec = 1000ms
    //one min = 60secs
    //one hour = 60mins
    //one day = 24hrs

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSec = 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days)
    let hours = (t % oneDay) / oneHour ;
    hours = Math.floor(hours)
    let mins = (t % oneHour) / oneMinute;
    mins = Math.floor(mins)
    let secs = (t % oneMinute) / oneSec
    secs = Math.floor(secs)

    //set values array
    const values = [days, hours, mins, secs]

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        else{
            return item
        }
    }

    timeRemaining.forEach(function(item, index){
        item.textContent = format(values[index])
    })
    if(t < 0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">It's a New Year! This countdown has expired.</h4>`
    }

}

//countdown
let countdown =  setInterval(getRemainingTime, 1000)

getRemainingTime()
