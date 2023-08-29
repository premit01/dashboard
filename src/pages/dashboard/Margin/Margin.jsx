import InputField from "../../../components/shared/InputField/InputField";
import ToggleButton from "../../../components/shared/ToggleButton/ToggleButton";

const Margin = ({ cropAlignment, handleOriginalMargin, handleTopMargin, handleBottomMargin, handleLeftMargin, handleRightMargin, handleOpenMargin, handleRotate }) => {
    return (
        <div>
            {/* margin toggler  */}
            <label className='flex items-center my-5' htmlFor="">
                <input
                    onChange={() => handleOriginalMargin(!cropAlignment?.isOriginalMargin)}
                    checked={cropAlignment?.isOriginalMargin}
                    type="radio"
                    className='accent-primary w-5 h-5 mr-5  '
                />
                <span className='uppercase'>Keep Original Margin & Aspect ratio</span>
            </label>

            {/* margin section  */}
            <div>
                <div>
                    <ToggleButton
                        eventHandler={handleOpenMargin}
                        cropAlignment={cropAlignment}
                        toggleLabel='Margin'
                    />
                </div>
                <div className={`${!cropAlignment?.isOpenMargin && 'hidden'} my-5`}>
                    <div className='grid grid-cols-2 gap-3 mb-5'>

                        <InputField
                            DefaultInput={cropAlignment?.topMargin}
                            eventHandler={handleTopMargin}
                            inputLabel="top margin"
                        />

                        <InputField
                            DefaultInput={cropAlignment?.bottomMargin}
                            eventHandler={handleBottomMargin}
                            inputLabel="Bottom margin"
                        />
                        <InputField
                            DefaultInput={cropAlignment?.leftMargin}
                            eventHandler={handleLeftMargin}
                            inputLabel="left margin"
                        />
                        <InputField
                            DefaultInput={cropAlignment?.rightMargin}
                            eventHandler={handleRightMargin}
                            inputLabel="right margin"
                        />


                    </div>
                </div>

                {/* rotate  */}
                <ToggleButton
                    eventHandler={() => handleRotate(!cropAlignment?.isRotate)}
                    cropAlignment={cropAlignment?.isRotate}
                    toggleLabel='rotate image upright'
                />

            </div>





        </div>
    );
};

export default Margin;