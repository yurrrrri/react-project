import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

// 서버가 아닌 브라우저에서 실행 -> 모든 브라우저 API 사용 가능
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw { message: "Could not fetch evnets." };
  } else {
    return response;
  }
}
