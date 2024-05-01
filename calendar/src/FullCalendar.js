import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function FullCalendarComponent() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        dateClick={(e) => handleDateClick(e)}
        events={[
          { title: "my wife's birthday", date: "2024-06-05" },
          { title: "my birthday", date: "2024-05-20" }
        ]}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
