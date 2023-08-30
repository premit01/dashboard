

const AspectRatio = ({ handleAspectRatio, handleOpenRatio, handleVerticalAlignment, cropAlignment }) => {

    const aspectOptions = [
        { id: 1, value: '1/1', title: '1:1 (square)' },
        { id: 2, value: '2/3', title: '2:3 (portrait)' },
        { id: 3, value: '3/2', title: '3:2 (landscape)' },
        { id: 4, value: '16/9', title: '16:9 (widescreen)' },
    ]

    const positionOptions = [
        { id: 1, value: 'top', },
        { id: 2, value: 'center', },
        { id: 3, value: 'bottom', },
    ]


    return (
        <div>
            <div className='mb-5 '>
                <label className='flex items-center' htmlFor="">
                    <input
                        onChange={() => handleOpenRatio(cropAlignment?.isOpenRatio === true ? false : true)}
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
        </div>
    );
};

export default AspectRatio;