import { useEffect, useState } from "react";
import api from "./api";


export default function Sessions({ onSelectSession }) {


    const [sessions, setSessions] = useState([]);


    useEffect(() => {

        api.get("/sessions")
            .then(res => setSessions(res.data))

    }, []);



    return (

        <div>


            <h2 className="text-xl font-bold mb-4">
                Sessions
            </h2>


            {
                sessions.map(s =>

                    <div

                        key={s._id}

                        onClick={() => onSelectSession(s._id)}

                        className="
border-b
border-slate-800
p-4
cursor-pointer
hover:bg-slate-800
rounded-lg
"

                    >


                        <p className="text-orange-400 font-semibold">

                            {s._id}

                        </p>


                        <p className="text-slate-300">

                            Events:
                            {s.totalEvents}

                        </p>


                    </div>

                )

            }


        </div>

    )

}