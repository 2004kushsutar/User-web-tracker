import { useEffect, useState } from "react";
import api from "./api";


export default function Heatmap() {


    const [points, setPoints] = useState([]);

    const [url, setUrl] = useState("");



    function loadHeatmap() {


        api.get("/heatmap",
            {
                params: {
                    url: url
                }
            })
            .then(res => {
                setPoints(res.data)
            })


    }



    return (

        <div>


            <h2>
                Heatmap View
            </h2>


            <input

                placeholder="Page URL"

                value={url}

                onChange={
                    e => setUrl(e.target.value)
                }

            />


            <button
                onClick={loadHeatmap}
            >
                Show
            </button>



            <div

                style={{

                    position: "relative",

                    width: "800px",

                    height: "500px",

                    border: "2px solid black",

                    marginTop: "20px"

                }}

            >


                {

                    points.map((p, i) => (


                        <div

                            key={i}

                            style={{

                                position: "absolute",

                                left: p.x,

                                top: p.y,

                                width: "15px",

                                height: "15px",

                                background: "red",

                                borderRadius: "50%"

                            }}


                        />


                    ))

                }


            </div>



        </div>

    )

}