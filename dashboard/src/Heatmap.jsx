import { useEffect, useState } from "react";
import api from "./api";


export default function Heatmap() {


    const [pages, setPages] = useState([]);

    const [selected, setSelected] = useState("");

    const [points, setPoints] = useState([]);

    const [pageHeight, setPageHeight] = useState(1200);

    const [pageWidth, setPageWidth] = useState(1200);



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



        api.get("/heatmap", {

            params: {
                url: selected
            }

        })
            .then(res => {


                setPoints(res.data);



                if (res.data.length) {


                    const height = Math.max(
                        1200,
                        ...res.data.map(
                            p => Number(p.page_height) || 1200
                        )
                    );


                    const width = Math.max(
                        1200,
                        ...res.data.map(
                            p => Number(p.page_width) || 1200
                        )
                    );


                    setPageHeight(height);

                    setPageWidth(width);


                }


            });


    }, [selected]);







    return (

        <div>


            <div className="
            flex
            justify-between
            items-center
            mb-5
            ">


                <div>


                    <h2 className="text-lg font-bold">
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
                    py-2
                    px-3
                    text-white
                    w-96
                    text-sm
                    outline-none
                    "

                >

                    {
                        pages.map(page => (

                            <option
                                key={page}
                                value={page}
                                className="bg-[#111827]"
                            >

                                {page}

                            </option>

                        ))
                    }


                </select>


            </div>







            <div

                className="
h-150
rounded-xl
border
border-slate-700
bg-[#0b0f19]
overflow-auto
scroll-smooth
"

            >





                <div


                    style={{

                        height: `${pageHeight}px`,

                        width: `${pageWidth}px`

                    }}


                    className="
                    relative
                    "

                >





                    <div

                        className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-10
                        p-3
                        z-20
                        border-b
                        border-slate-700
                        bg-[#111827]
                        text-xs
                        text-slate-400
                        "

                    >

                        {selected}

                    </div>






                    {
                        points.map((p, i) => (


                            <div

                                key={i}


                                style={{

                                    position: "absolute",

                                    left: `${p.x}px`,

                                    top: `${p.y}px`

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

                        <div
                            className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        text-slate-500
                        "
                        >
                            No clicks recorded
                        </div>

                    }





                </div>




            </div>




        </div>

    )

}