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

            <h2>
                Sessions
            </h2>


            {
                sessions.map(session => (

                    <div

                        key={session._id}

                        onClick={() =>
                            onSelectSession(session._id)
                        }

                        className=" p-4 rounded-xl border border-slate-200 hover:bg-slate-100 cursor-pointer transition mb-3 shadow-sm "

                    >

                        <p className="font-semibold text-slate-700">

                            Session

                        </p>


                        <p className="text-sm text-slate-500 break-all">

                            {session._id}

                        </p>


                        <p className="mt-2 font-bold">

                            Events:

                            <span className="text-blue-600">

                                {session.totalEvents}

                            </span>

                        </p>


                    </div>

                ))

            }


        </div>

    )

}