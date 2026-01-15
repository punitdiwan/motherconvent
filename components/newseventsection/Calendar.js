import React from "react";
import moment from "moment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default class Calendar extends React.Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
    selectedDay: null,
    showYearNav: false,
  };

  constructor(props) {
    super(props);
    this.width = props.width || "100%";
    this.style = props.style || {};
    this.style.width = this.width;
  }

  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => this.state.dateContext.format("Y");
  month = () => this.state.dateContext.format("MMMM");
  daysInMonth = () => this.state.dateContext.daysInMonth();
  currentDay = () => this.state.dateContext.format("D");

  firstDayOfMonth = () =>
    moment(this.state.dateContext).startOf("month").format("d");

  setMonth = (month) => {
    const monthNo = this.months.indexOf(month);
    const dateContext = moment(this.state.dateContext).set("month", monthNo);
    this.setState({ dateContext });
  };

  nextMonth = () => {
    const dateContext = moment(this.state.dateContext).add(1, "month");
    this.setState({ dateContext });
    this.props.onNextMonth?.();
  };

  prevMonth = () => {
    const dateContext = moment(this.state.dateContext).subtract(1, "month");
    this.setState({ dateContext });
    this.props.onPrevMonth?.();
  };

  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange?.();
  };

  SelectList = (props) => (
    <div className="month-popup">
      {props.data.map((data) => (
        <div key={data}>
          <a href="#" onClick={(e) => this.onSelectChange(e, data)}>
            {data}
          </a>
        </div>
      ))}
    </div>
  );

  onChangeMonth = () =>
    this.setState({ showMonthPopup: !this.state.showMonthPopup });

  MonthNav = () => (
    <span className="label-month" onClick={this.onChangeMonth}>
      {this.month()}
      {this.state.showMonthPopup && <this.SelectList data={this.months} />}
    </span>
  );

  showYearEditor = () => this.setState({ showYearNav: true });

  setYear = (year) => {
    const dateContext = moment(this.state.dateContext).set("year", year);
    this.setState({ dateContext });
  };

  onYearChange = (e) => {
    this.setYear(e.target.value);
    this.props.onYearChange?.(e, e.target.value);
  };

  onKeyUpYear = (e) => {
    if (e.which === 13 || e.which === 27) {
      this.setState({ showYearNav: false });
    }
  };

  YearNav = () =>
    this.state.showYearNav ? (
      <input
        defaultValue={this.year()}
        className="editor-year"
        ref={(input) => (this.yearInput = input)}
        onKeyUp={this.onKeyUpYear}
        onChange={this.onYearChange}
        type="number"
        placeholder="year"
      />
    ) : (
      <span className="label-year" onDoubleClick={this.showYearEditor}>
        {this.year()}
      </span>
    );

  onDayClick = (e, day) => {
    this.setState({ selectedDay: day });
    this.props.onDayClick?.(e, day);
  };

  render() {
    const weekdays = this.weekdaysShort.map((day) => (
      <td key={day} className="week-day">
        {day}
      </td>
    ));

    const blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={`blank-${i}`} className="emptySlot">
          {""}
        </td>
      );
    }

    const daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = d == this.currentDay() ? "day current-day" : "day";
      let selectedClass = d == this.state.selectedDay ? " selected-day " : "";
      daysInMonth.push(
        <td key={d} className={className + selectedClass}>
          <span onClick={(e) => this.onDayClick(e, d)}>{d}</span>
        </td>
      );
    }

    const totalSlots = [...blanks, ...daysInMonth];
    const rows = [];
    let cells = [];

    totalSlots.forEach((cell, i) => {
      if (i % 7 !== 0) {
        cells.push(cell);
      } else {
        rows.push(cells);
        cells = [cell];
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    const trElems = rows.map((row, i) => <tr key={i}>{row}</tr>);

    return (
      <div className="eventinfo">
        <h3>School Calendar</h3>
        <hr />
        <div className="calendar-container" style={this.style}>
          <table className="calendar">
            <thead>
              <tr className="calendar-header">
                <td colSpan="5">
                  <this.MonthNav /> <this.YearNav />
                </td>

              
              </tr>
            </thead>
            <tbody>
              <tr>{weekdays}</tr>
              {trElems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
