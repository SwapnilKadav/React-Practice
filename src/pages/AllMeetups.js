import { useEffect, useState } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "Aren yeger Founding Titan",
//     image: "https://i.redd.it/vmzgebe0mlq61.jpg",
//     address: "Meetupstreet 5, 1234",
//     description:
//       "Your opinion on Eren’s founding Titan design and how the rumbling looks visually and design wise? I personally thought Yams captured the horror excellently.",
//   },
//   {
//     id: "m2",
//     title: "Demon Slayer Corp",
//     image:
//       "https://staticg.sportskeeda.com/editor/2022/07/f63ca-16577199167076-1920.jpg?w=1200",
//     address: "Meetupstreet 5, 1234",
//     description:
//       "As the name suggests, Demon Slayer is a popular anime about slaying demons. The series antagonist, Muzan Kibutsuji, is responsible for filling the world with demons. To end his reign of terror, a group of sword-wielding individuals, known as the Demon Slayers, seek out and hunt his minions in order to get to him",
//   },
// ];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);
    
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://react-app-aa9a4-default-rtdb.firebaseio.com/meetups.json'
        ).then(Response => {
            return Response.json();
        }).then((data) => {
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    },[]);
    

    if (isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  );
}
export default AllMeetupsPage;
