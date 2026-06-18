import { useEffect, useState } from "react";
import api from "./api";
import Sessions from "./Sessions";
import Journey from "./Journey";
import Heatmap from "./Heatmap";


export default function App() {


  const [selectedSession, setSelectedSession] = useState(null);

  const [sessions, setSessions] = useState([]);

  const [totalEvents, setTotalEvents] = useState(0);

  const [clicks, setClicks] = useState(0);



  // Fetch real MongoDB data
  useEffect(() => {


    api.get("/sessions")
      .then((res) => {


        setSessions(res.data);


        let eventsCount = 0;


        res.data.forEach((session) => {

          eventsCount += session.totalEvents;

        });


        setTotalEvents(eventsCount);


      })
      .catch(err => {
        console.log(err);
      });



    api.get("/all")
      .then((res) => {


        const clickCount = res.data.filter(
          event => event.event_type === "click"
        ).length;


        setClicks(clickCount);


      })
      .catch(err => {
        console.log(err);
      });


  }, []);




  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex">


      {/* Sidebar */}

      <aside className="w-64 border-r border-slate-800 p-6 hidden md:block">


        <h1 className="text-4xl font-bold mb-10">
          ⚡ Trackr
        </h1>


        {/* <div className="space-y-4">


          <div className="bg-slate-800 rounded-lg p-3">
            📊 Sessions
          </div>


          <div className="p-3 text-slate-400">
            🔥 Heatmap
          </div>


        </div> */}



        {/* <div className="fixed bottom-6 w-52 border border-slate-700 rounded-xl p-4">


          <p className="text-green-400">
            ● Live
          </p>


          <p className="text-sm text-slate-400">
            Tracking active
          </p>


        </div> */}


      </aside>





      {/* Main */}

      <main className="flex-1 p-8">



        <div className="flex justify-between mb-8">


          <div>


            <h1 className="text-3xl font-bold">
              Sessions
            </h1>


            <p className="text-slate-400">
              All recorded sessions
            </p>


          </div>



          <div className="text-slate-400 text-sm">

            Tracking

            <span className="text-green-400 ml-2">
              ● Live
            </span>

          </div>


        </div>





        {/* Real Metrics */}

        <div className="grid grid-cols-3 gap-5 mb-8">


          <div className="
          bg-[#151927]
          border border-slate-800
          rounded-xl
          p-5
          ">


            <p className="text-xs text-slate-400">
              Sessions
            </p>


            <h2 className="text-3xl font-bold mt-2">
              {sessions.length}
            </h2>


          </div>





          <div className="
          bg-[#151927]
          border border-slate-800
          rounded-xl
          p-5
          ">


            <p className="text-xs text-slate-400">
              Events
            </p>


            <h2 className="text-3xl font-bold mt-2">
              {totalEvents}
            </h2>


          </div>





          <div className="
          bg-[#151927]
          border border-slate-800
          rounded-xl
          p-5
          ">


            <p className="text-xs text-slate-400">
              Click Events
            </p>


            <h2 className="text-3xl font-bold mt-2">
              {clicks}
            </h2>


          </div>


        </div>






        <div className="grid grid-cols-2 gap-6">



          {/* Sessions */}


          <div className="
bg-[#151927]
border border-slate-800
rounded-xl
p-5
h-125
overflow-y-auto
pr-3
">


            <Sessions
              onSelectSession={setSelectedSession}
            />


          </div>






          {/* Journey */}


          <div className="
          bg-[#151927]
          border border-slate-800
          rounded-xl
          p-5
          ">



            {
              selectedSession ?


                <Journey
                  id={selectedSession}
                />


                :


                <p className="text-slate-400">
                  Select a session to view journey
                </p>

            }



          </div>



        </div>







        {/* Heatmap */}


        <div className="
        mt-6
        bg-[#151927]
        border border-slate-800
        rounded-xl
        p-5
        ">


          <Heatmap />


        </div>





      </main>


    </div>
  );
}