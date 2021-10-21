class AlarmClock{

    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined){
            throw new Error('не задан id')
        }
        if (this.alarmCollection.find(element => element.id === id)) {
            console.error(`id уже существует`);
            return
        }
        this.alarmCollection.push({time, callback, id})
    }

    removeClock(id){
        const clockIndex = this.alarmCollection.findIndex(element => element.id === id);
        if (clockIndex < 0){
            console.error('будильник с таким id не найден');
            return
        }
        this.alarmCollection.splice(clockIndex, 1);
    }

    getCurrentFormattedTime(){
        const time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return time;
    }

    printAlarms(){
        this.alarmCollection.forEach((element) => {
            console.log(element.time + " " + element.id)
        });
    };

    start(){
        this.checkClock();
        if (this.timerId === null){
            this.timerId = setInterval(this.checkClock.bind(this), 100);
        }

    }
    checkClock(){
        console.log(`Тик так ` + this.getCurrentFormattedTime());
        this.alarmCollection.forEach((alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time ) {
                this.removeClock(alarm.id)
                alarm.callback();
            }
        })
    }
    stop(){
        if (this.timerId !== null){
            clearInterval(this.timerId)
        }
        this.timerId = null;
        this.clearAlarms();
    }
    clearAlarms(){
        this.alarmCollection = [];
    }
    
};