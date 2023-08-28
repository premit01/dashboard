import './CroppingAndAlignment.css'


const CroppingAndAlignment = ({ cropAlignment, setCropAlignment }) => {



    const handleOpenRatioOption = (isOpen) => {
        console.log('isOpen')
        setCropAlignment((cropAlignment) => ({ ...cropAlignment, isOpenRatio: isOpen }))

    }


    const handleAspectRatio = e => {
        const ratio = e.target.value;
        console.log('ratioStae', cropAlignment?.aspectRatio)
        setCropAlignment((cropAlignment) => ({ ...cropAlignment, aspectRatio: ratio }))

    }

    const handleVerticalAlignment = e => {
        const alignment = e.target.value;
        setCropAlignment((cropAlignment) => ({ ...cropAlignment, ratioAlignment: alignment }))
        console.log(cropAlignment?.ratioAlignment)
    }

    const handleExactOption = (option) => {

    }




    const aspectOptions = [
        { id: 1, value: '1/1', title: '1:1 (square)' },
        { id: 2, value: '2/3', title: '2:2 (portrait)' },
        { id: 3, value: '3/2', title: '3:2 (landscape)' },
        { id: 4, value: '16/9', title: '16:9 (widescreen)' },
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



                {/* 
                <div className='mb-5 '>
                    <label className='flex items-center' htmlFor="">
                        <input
                            onChange={() => handleOpenRatioOption(!cropAlignment?.isOpenRatio)}
                            checked={selectedBackground?.selectedBackgroundColor === value}
                            value={value}
                            type="radio"
                            className='accent-primary w-5 h-5 mr-5  bg-red-200'

                        />
                        <span className='uppercase'>{title}</span>
                    </label>
                </div> */}









                {/* aspect ratio  */}
                <div className='mb-5 '>
                    <label className='flex items-center' htmlFor="">
                        <input
                            onChange={() => handleOpenRatioOption(cropAlignment?.isOpenRatio === true ? false : true)}
                            checked={cropAlignment?.isOpenRatio}
                            type="radio"
                            className='accent-primary w-5 h-5 mr-5  bg-red-200'

                        />
                        <span className='uppercase'>Ratio</span>
                    </label>
                </div>

                <div className={`${!cropAlignment?.isOpenRatio && 'hidden'} p-2 duration-500 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full`}>

                    <div className="w-full  ">
                        <label htmlFor="hs-hidden-select" className=" border w-full">

                        </label>


                        {/* ratio  */}
                        <select
                            onChange={handleAspectRatio}
                            id="hs-hidden-select"
                            className="py-3 px-4 w-full  block mb-3 rounded-md text-sm "
                            defaultValue={aspectOptions[0].value}
                            style={{ border: '1px solid #ddd', outline: 'none' }}
                        >

                            {
                                aspectOptions.map(op => <option
                                    key={op.id}
                                    value={op.value}

                                >
                                    {op?.title};
                                </option>)
                            }

                        </select>


                        {/* position ******************************* */}

                        <select
                            id="hs-hidden-select"
                            className="py-3 px-4 w-full  block   rounded-md text-sm   "
                            onChange={handleVerticalAlignment}

                            style={{ border: '1px solid #ddd', outline: 'none' }}
                        >

                            {
                                positionOptions.map(position => <option value={position?.value} key={position.id}>
                                    {position.value}
                                </option>)
                            }

                        </select>


                    </div>


                </div>


                {/* ********************exact %%%%%%%%%%%%%%%%%%%% */}

                <div>
                    <label className='flex items-center mb-5' htmlFor="">
                        <input
                            onChange={() => handleExactOption(!cropAlignment?.isExactOpen)}
                            checked={cropAlignment?.isExactOpen}
                            type="radio"
                            className='accent-primary w-5 h-5 mr-5  '

                        />
                        <span className='uppercase'>Exact</span>
                    </label>


                    {/* input */}

                    <div className='grid grid-cols-2 gap-3 mb-5'>

                        <div className="relative ">
                            <label htmlFor="UserEmail" className="ml-2 text-xs">
                                Height
                            </label>
                            <input
                                type="email"
                                id="UserEmail"
                                className="w-full rounded-md py-2 px-3 border-[#ddd] border outline-0 pe-10 shadow-sm sm:text-sm"
                            />
                            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 mt-3">
                                px
                            </span>
                        </div>



                        <div className="relative ">
                            <label htmlFor="UserEmail" className="ml-2 text-xs">
                                Width
                            </label>
                            <input
                                type="email"
                                id="UserEmail"
                                className="w-full rounded-md py-2 px-3 border-[#ddd] border outline-0 pe-10 shadow-sm sm:text-sm"
                            />
                            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 mt-3">
                                px
                            </span>
                        </div>
                    </div>


                    {/* virtical alignment  */}

                    <div>
                        <select
                            id="hs-hidden-select"
                            className="py-2 px-4 w-full  block   rounded-md text-sm   "
                            onChange={handleVerticalAlignment}

                            style={{ border: '1px solid #ddd', outline: 'none' }}
                        >

                            {
                                positionOptions.map(position => <option value={position?.value} key={position.id}>
                                    {position.value}
                                </option>)
                            }

                        </select>
                    </div>

                </div>


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