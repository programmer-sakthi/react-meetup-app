import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [dataReceived, setDataReceived] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // setDataReceived(true);
    fetch("https://meetup-page-8a9e4-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataReceived(true);
        const meetups=[];
        for(const key in data)
        {
          const meetup={
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setDataReceived(true);
        setLoadedMeetups(meetups);
      });
  }, [] );

  if (!dataReceived) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>AllMeetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
