import {useState} from 'react';

const FetchButton = () => {
  const [events, setEvents] = useState([]);

  const onClickHandler = () => {
    fetch("http://localhost:8080/events").then((response) => response.json())
      .then((response) => {
        setEvents(response.events);
      });
  };

  return (
    <div>
      <button onClick={onClickHandler}>Fetch events</button>
      <ul>
        {events.map((event) => {
          return <li key={event.title}>{event.title}</li>
        })}
      </ul>
    </div>
  );
};

export default FetchButton;