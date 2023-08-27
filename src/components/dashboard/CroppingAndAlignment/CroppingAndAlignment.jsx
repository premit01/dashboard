


const CroppingAndAlignment = ({ isTrim = true, setTrim }) => {

    const aspectOptions = [
        { id: 1, value: '1:1', size: 'square' },
        { id: 2, value: '2:3', size: 'portrait' },
        { id: 3, value: '3:2', size: 'landscape' },
        { id: 4, value: '16:9', size: 'widescreen' },
    ]
    const positionOptions = [
        { id: 1, value: 'top', },
        { id: 2, value: 'center', },
        { id: 3, value: 'bottom', },
    ]


    return (
        <div className="w-full">
            <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
                <p className="text-sm text-slate-500 text-capitalize mb-3">Cropping and Alignment</p>

                {/* aspect ratio  */}
                <div className="form-control mb-4">
                    <label className="cursor-pointer label justify-start ">
                        <input onChange={() => setTrim(!isTrim)} type="checkbox" checked={isTrim} className="checkbox checkbox-warning mr-5" />
                        <span className=" uppercase">Trim </span>
                    </label>
                </div>

                <div className={`${!isTrim && 'hidden'} p-2 duration-500 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full`}>

                    <div className="w-full  ">
                        <label htmlFor="hs-hidden-select" className=" border w-full">

                        </label>
                        <select
                            id="hs-hidden-select"
                            className="py-3 px-4 w-full  block mb-3 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  "
                        >
                            <option className="w-full" selected="">Select Ration</option>
                            {
                                aspectOptions.map(op => <option key={op.id}>
                                    {op.value} &#40; {op.size} &#41;
                                </option>)
                            }

                        </select>

                        {/* position ******************************* */}

                        <select
                            id="hs-hidden-select"
                            className="py-3 px-4 w-full  block   rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  "
                        >
                            <option className="w-full" selected="">Vertical Alignment</option>
                            {
                                positionOptions.map(position => <option key={position.id}>
                                    {position.value}
                                </option>)
                            }

                        </select>
                    </div>


                </div>


                {/* ********************exact %%%%%%%%%%%%%%%%%%%% */}


            </div>




            {/* <div className={`${background !== 'custom color' ? 'hidden' : ''} p-2  duration-500 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52`}>

                <div className='border w-full p-2'>
                    <input onChange={handleBackgroundColor} type="color" className='w-full' />
                </div>

            </div> */}
        </div>


    );
};

export default CroppingAndAlignment;