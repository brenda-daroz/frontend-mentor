
const currentDailyWork = document.getElementById("current-daily-work")
const previousDailyWork = document.getElementById("previous-daily-work")
const currentDailyPlay = document.getElementById("current-daily-play")
const previousDailyPlay = document.getElementById("previous-daily-play")
const currentDailyStudy = document.getElementById("current-daily-study")
const previousDailyStudy = document.getElementById("previous-daily-study")
const currentDailyExercise = document.getElementById("current-daily-exercise")
const previousDailyExercise = document.getElementById("previous-daily-exercise")
const currentDailySocial = document.getElementById("current-daily-social")
const previousDailySocial = document.getElementById("previous-daily-social")
const currentDailySelfCare = document.getElementById("current-daily-self-care")
const previousDailySelfCare = document.getElementById("previous-daily-self-care")

const elements = document.querySelectorAll("[data-type]");
console.log(elements)





const work = {
    daily: {
        current: "5hrs",
        previous: "Yesterday - 7 hours",
    },
    weekly: {
        current: "7hrs",
        previous: "Last week - 14 hours"
    },
    monthly: {
        current: "103hrs",
        previous: "Last month - 128 hours"
    }
}

const daily = {
    work: {
        current: "5hrs",
        previous: "Yesterday - 7 hours",
    },
    play: {
        current: "1hr",
        previous: "Yesterday - 2 hours"
    },
    study: {
        current: "1hr",
        previous: "Yesterday - 3 hour"
    },
    exercise: {
        current: "1hr",
        previous: "Yesterday - 1 hour"
    },
    social: {
        current: "1hr",
        previous: "Yesterday - 3 hours"
    },
    selfCare: {
        current: "0hr",
        previous: "Yesterday - 1 hour"
    }
}

const weekly = {
    work: {
        current: "7hrs",
        previous: "Last week - 14 hours",
    },
    play: {
        current: "2hr",
        previous: "Last week - 7 hours"
    },
    study: {
        current: "3hr",
        previous: "Last week - 4 hour"
    },
    exercise: {
        current: "1hr",
        previous: "Last week - 1 hour"
    },
    social: {
        current: "1hr",
        previous: "Last week - 3 hours"
    },
    selfCare: {
        current: "0hr",
        previous: "Last week - 3 hour"
    }
}

const monthly = {
    work: {
        current: "103hrs",
        previous: "Last month - 128 hours",
    },
    play: {
        current: "23hrs",
        previous: "Last month - 29 hours"
    },
    study: {
        current: "13hrs",
        previous: "Last month - 19 hours"
    },
    exercise: {
        current: "11hrs",
        previous: "Last month - 18 hours"
    },
    social: {
        current: "21hrs",
        previous: "Last month - 23 hours"
    },
    selfCare: {
        current: "7hrs",
        previous: "Last month - 11 hours"
    }
}

const changeContent = function (period) {
    currentDailyWork.innerHTML = period.work.current
    previousDailyWork.innerHTML = period.work.previous
    currentDailyPlay.innerHTML = period.play.current
    previousDailyPlay.innerHTML = period.play.previous
    currentDailyStudy.innerHTML = period.study.current
    previousDailyStudy.innerHTML = period.study.previous
    currentDailyExercise.innerHTML = period.exercise.current
    previousDailyExercise.innerHTML = period.exercise.previous
    currentDailySocial.innerHTML = period.social.current
    previousDailySocial.innerHTML = period.social.previous
    currentDailySelfCare.innerHTML = period.selfCare.current
    previousDailySelfCare.innerHTML = period.selfCare.previous
}

// stratwegy 1

const btnWeekly = document.getElementById("btn-weekly")
const btnDaily = document.getElementById("btn-daily")
const btnMonthly = document.getElementById("btn-monthly")

btnWeekly.addEventListener("click", () => {
    changeContent(weekly)
})

btnDaily.addEventListener("click", () => {
    changeContent(daily)
})

btnMonthly.addEventListener("click", () => {
    changeContent(monthly)
})

// strategy 2

// const btns = document.querySelectorAll("[data-id]");
// console.log(btns)
// btns.forEach(btn => {
//     if (btn.dataset.id === "weekly") {
//         btn.addEventListener("click", function clicou() {
//             console.log("clicou weekly")
//         })
//     }
//     if (btn.dataset.id === "daily") {
//         btn.addEventListener("click", function clicou() {
//             console.log("clicou daily")
//         })
//     }
//     if (btn.dataset.id === "monthly") {
//         btn.addEventListener("click", function clicou() {
//             console.log("clicou monthly")
//         })
//     }
// })

// strategy 3

// const definitions = {
//     "#btn-weekly": () => { changeContent(weekly) },
//     "#btn-daily": () => { changeContent(daily) },
//     "#btn-monthly": () => { changeContent(monthly) }
// }

// for (const [id, fn] of Object.entries(definitions)) {
//     document.getElementById(id).addEventListener("click", fn)
// }