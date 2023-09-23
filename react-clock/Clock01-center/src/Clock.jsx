import { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  componentDidMount() {
    this.startTime();
  }

  startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();

    hr = hr == 0 ? 12 : hr;
    hr = hr > 12 ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);

    var months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Augosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    var days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + " - " + curDay + " " + curMonth + ", " + curYear;

    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");

    clockElement.innerHTML = hr + ":" + min;
    dateElement.innerHTML = date;

    setTimeout(() => {
      this.startTime();
    }, 500);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
  }

  render() {
    return (
      <div className="clockdate-wrapper">
        <div id="clock"></div>
        <div id="date"></div>
      </div>
    );
  }
}

export default Clock;
