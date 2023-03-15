window.addEventListener('load', gettime);
    function gettime(){
        let date = new Date();
        let daynumber = date.getDay();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let sec = date.getSeconds();
        let ampm = hour >= 12 ? "PM" : "AM";
        let daynames = ["Sun","MON","TUE","WED","THU","FRI","SAT"];

        hour = hour % 12;
        hour = hour ? hour : "12";
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        sec = sec < 10 ? "0" + sec : sec;

        document.getElementById("date").innerHTML = daynames[daynumber];
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = sec;
        document.getElementById("ampm").innerHTML = ampm;

        // Load lai ngay lap tuc. 200 milisec.
        setTimeout(gettime, 200);
    }