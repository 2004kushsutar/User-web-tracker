import { useState } from "react";
import Sessions from "./Sessions";
import Journey from "./Journey";
import Heatmap from "./Heatmap";


export default function App() {


  const [session, setSession] = useState(null);


  return (

    <div className="flex min-h-screen">


      {/* Sidebar */}

      <div className="
w-64
bg-slate-900
text-white
p-6
">


        <h1 className="text-2xl font-bold">
          Analytics
        </h1>


        <div className="mt-10 space-y-4">

          <p>
            📊 Sessions
          </p>

          <p>
            🔥 Heatmap
          </p>


        </div>


      </div>



      {/* Main */}

      <div className="
flex-1
p-8
">


        <h2 className="
text-3xl
font-bold
mb-6
">

          User Analytics Dashboard

        </h2>



        <div className="
grid grid-cols-3
gap-6
mb-8
">


          <div className="bg-white p-5 rounded-xl shadow">

            <h3>
              Sessions
            </h3>

            <p className="text-3xl font-bold">
              {session ? 1 : 0}
            </p>

          </div>


          <div className="bg-white p-5 rounded-xl shadow">

            <h3>
              Events
            </h3>

            <p className="text-3xl font-bold">
              --
            </p>

          </div>



          <div className="bg-white p-5 rounded-xl shadow">

            <h3>
              Status
            </h3>

            <p className="text-green-600">
              Live
            </p>

          </div>



        </div>




        <div className="
grid
grid-cols-2
gap-6
">


          <div className="
bg-white
rounded-xl
shadow
p-5
">

            <Sessions
              onSelectSession={setSession}
            />

          </div>



          <div className="
bg-white
rounded-xl
shadow
p-5
">

            {
              session ?

                <Journey id={session} />

                :

                <p>
                  Select a session
                </p>

            }

          </div>



        </div>



        <div className="
mt-6
bg-white
rounded-xl
shadow
p-5
">


          <Heatmap />


        </div>



      </div>


    </div>

  )

}