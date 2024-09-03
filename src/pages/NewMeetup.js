import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm"


function NewMeetupPage() {

  const history=useNavigate();

  function addMeetupHandler(meetupData)
  {
    fetch('https://meetup-page-8a9e4-default-rtdb.firebaseio.com/meetups.json',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type' : 'application/json '
      }
    }).then(() => {
      history('/')
    });
  }
  
  return (
    <section>
      <h1>NewMeetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>      
    </section>
  )
}

export default NewMeetupPage