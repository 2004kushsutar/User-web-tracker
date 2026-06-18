import { useEffect, useState } from "react";
import api from "./api";


export default function Journey({ id }) {


    const [events, setEvents] = useState([]);


    useEffect(() => {


        api.get(
            `/sessions/${id}`
        )
            .then(res => setEvents(res.data))


    }, [id]);



    return (

        <div>


            <h2>
                User Journey
            </h2>


            {

                events.map((event, index) => (

                    <div
                        key={index}

                        className=" border-l-4 border-blue-500 pl-4 mb-5 bg-slate-50 p-4 rounded-lg shadow-sm "
                    >


                        {new Date(
                            event.timestamp
                        ).toLocaleString()}


                        <br />


                        <b>
                            {event.event_type}
                        </b>


                        <br />


                        Page:

                        {event.page_url}


                        {

                            event.event_type === "click" &&

                            <p>
                                Position:
                                ({event.x},{event.y})
                            </p>

                        }


                    </div>


                ))

            }


        </div>

    )

}