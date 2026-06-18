import { useEffect, useState } from "react";
import api from "./api";


export default function Heatmap() {


    const [pages, setPages] = useState([]);

    const [selected, setSelected] = useState("");

    const [points, setPoints] = useState([]);



    useEffect(() => {


        api.get("/pages")
            .then(res => {

                setPages(res.data);


                if (res.data.length) {

                    setSelected(res.data[0]);

                }

            });


    }, []);





    useEffect(() => {


        if (!selected) return;


        api.get("/heatmap",
            {

                params: {
                    url: selected
                }

            })
            .then(res => {

                setPoints(res.data);

            });


    }, [selected]);





    return (

        <div>


            <div className="flex justify-between items-center mb-5">


                <div>

                    <h2 className="text-xl font-bold">

                        Click Heatmap

                    </h2>


                    <p className="text-slate-400 text-sm">

                        Visualize click distribution

                    </p>


                </div>



                <select

                    value={selected}

                    onChange={
                        e => setSelected(e.target.value)
                    }

                    className="
bg-[#111827]
border
border-slate-700
rounded-lg
p-3
text-white
w-80
outline-none
"

                >


                    {
                        pages.map(page =>

                            <option
                                key={page}
                                value={page}
                                className="bg-[#111827] text-white"
                            >

                                {page}

                            </option>

                        )

                    }


                </select>


            </div>





            <div

                className="
relative
h-[500px]
rounded-xl
border
border-slate-700
bg-[#0b0f19]
overflow-hidden
"

            >


                <div >

                    {/* {selected} */}

                </div>



                {
                    points.map((p, i) => (


                        <div

                            key={i}

                            style={{

                                position: "absolute",

                                left: p.x,

                                top: p.y

                            }}

                            className="
w-5
h-5
bg-orange-500
rounded-full
shadow-[0_0_25px_orange]
"


                        />


                    ))

                }



                {
                    points.length === 0 &&

                    <div className="
h-full
flex
items-center
justify-center
text-slate-500
">

                        No clicks recorded

                    </div>

                }


            </div>



        </div>

    )

}