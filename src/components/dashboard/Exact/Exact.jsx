import InputField from "../../shared/InputField/InputField";


const Exact = ({ handleOpenExact, handleExactHeight, handleExactWidth, handleVerticalAlignment, cropAlignment }) => {

    const positionOptions = [
        { id: 1, value: 'top', },
        { id: 2, value: 'center', },
        { id: 3, value: 'bottom', },
    ]



    return (
        <div>
            <label className='flex items-center mb-5' htmlFor="">
                <input
                    onChange={() => handleOpenExact(!cropAlignment?.isOpenExact)}
                    checked={cropAlignment?.isOpenExact}
                    type="radio"
                    className='accent-primary w-5 h-5 mr-5  '
                />
                <span className='uppercase'>Exact</span>
            </label>


            {/* exacts */}

            <div className={`${!cropAlignment?.isOpenExact ? 'hidden' : ''}`}>
                <div className='grid grid-cols-2 gap-3 mb-5'>

                    <InputField
                        DefaultInput={cropAlignment?.handleExactHeight}
                        eventHandler={handleExactHeight}
                        inputLabel='exact height'
                    />




                    <InputField
                        DefaultInput={cropAlignment?.handleExactWidth}
                        eventHandler={handleExactWidth}
                        inputLabel='exact width'
                    />







                </div>


                {/* vertical alignment  */}

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
    );
};

export default Exact;