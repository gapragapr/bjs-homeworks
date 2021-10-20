class AlarmClock{

    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id){
        if (id === undefined){
            throw new Error('не задан id')
        }
        if (this.alarmCollection.every(element => element[2] !== id)) {
            this.alarmCollection.push([time, func, id])
        }
        else{
            console.error('id  уже существует');
        }
       
    }

    removeClock(id){
            let indexedClock = this.alarmCollection.find(element => element[2] === id);
            if (indexedClock !== undefined){
                this.alarmCollection.splice(indexedClock, 1);
            }
            else{
                console.error('будильник с таким id не найден')
            }
    }

    getCurrentFormattedTime(){
        let time = new Date();
        let hh = String(time.getHours())
        let mm = String(time.getMinutes());
        let nowTime = hh + ':' + mm;

        return nowTime;
    }

    printAlarms(){
        this.alarmCollection.forEach(element => {console.log(element[0] + element[2])});
    };
};

