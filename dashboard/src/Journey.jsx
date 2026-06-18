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

        <div className="h-[500px] overflow-y-auto pr-3">


            <h2>
                User Journey
            </h2>


            {

                <div className="space-y-4">

                    {
                        events.map((event, index) => (


                            <div
                                key={index}
                                className="
border-l-2
border-orange-500
pl-4
bg-slate-900
p-4
rounded-lg
"
                            >


                                <p className="text-xs text-slate-400">

                                    {new Date(event.timestamp)
                                        .toLocaleString()}

                                </p>


                                <h3 className="font-bold">

                                    {event.event_type}

                                </h3>


                                <p className="text-slate-400 text-sm">

                                    {event.page_url}

                                </p>


                                {
                                    event.event_type === "click" &&

                                    <p className="text-orange-400 text-sm">

                                        x:{event.x} y:{event.y}

                                    </p>

                                }


                            </div>


                        ))
                    }

                </div>

            }


        </div>

    )

}