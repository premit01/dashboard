import Margin from '../../../pages/dashboard/Margin/Margin';
import AspectRatio from '../AspectRatio/AspectRatio';
import Exact from '../Exact/Exact';
import './CroppingAndAlignment.css'


const CroppingAndAlignment = ({ cropAlignment, setCropAlignment }) => {


    // state property chang handler 

    const handlePropertyChange = (property, value) => {
        setCropAlignment((cropAlignment) => ({ ...cropAlignment, [property]: value }))
    }


    const handleOpenRatio = (isOpen) => {
        handlePropertyChange('isOpenRatio', isOpen)
        handlePropertyChange('isOpenExact', false)
        handlePropertyChange('isOriginalMargin', false)

        handlePropertyChange('exactHeight', '')
        handlePropertyChange('exactWidth', '')
        handlePropertyChange('exactAlignment', '')
        // console.log(cropAlignment)

    }

    const handleOpenExact = (isOpen) => {
        handlePropertyChange('isOpenExact', isOpen)
        handlePropertyChange('isOpenRatio', false)
        handlePropertyChange('isOriginalMargin', false)

        handlePropertyChange('aspectRatio', '')
        handlePropertyChange('ratioAlignment', '')
        // console.log('handleExact', cropAlignment)
    }

    const handleOriginalMargin = (isOpen) => {
        handlePropertyChange('isOriginalMargin', isOpen)
        handlePropertyChange('isOpenRatio', false)
        handlePropertyChange('isOpenExact', false)

        handlePropertyChange('aspectRatio', '')
        handlePropertyChange('ratioAlignment', '')

        handlePropertyChange('exactHeight', '')
        handlePropertyChange('exactWidth', '')
        handlePropertyChange('exactAlignment', '')
        console.log('original margin', cropAlignment)
    }

    // handle open margin 

    const handleOpenMargin = (isOpen) => {
        handlePropertyChange('isOpenMargin', isOpen)
    }

    // handle Rotate 
    const handleRotate = (isRotate) => {
        handlePropertyChange('isRotate', isRotate)
    }


    const handleAspectRatio = e => {
        const ratio = e.target.value;
        handlePropertyChange("aspectRatio", ratio)

    }

    const handleVerticalAlignment = e => {
        const alignment = e.target.value;
        handlePropertyChange("ratioAlignment", alignment)

    }

    const handleExactHeight = e => {
        const height = e.target.value;
        handlePropertyChange("exactHeight", height)
    }

    const handleExactWidth = e => {
        const width = e.target.value;
        handlePropertyChange('exactWidth', width)
    }



    // top margin 
    const handleTopMargin = e => {
        const topMargin = e.target.value;
        handlePropertyChange('topMargin', topMargin)
    }

    // bottom margin 
    const handleBottomMargin = e => {
        const bottomMargin = e.target.value;
        handlePropertyChange('bottomMargin', bottomMargin)
    }
    // left margin 
    const handleLeftMargin = e => {
        const leftMargin = e.target.value;
        handlePropertyChange('leftMargin', leftMargin)
    }
    // left margin 
    const handleRightMargin = e => {
        const rightMargin = e.target.value;
        handlePropertyChange('rightMargin', rightMargin)
    }





    return (
        <div className="w-full">
            <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
                <p className="text-sm text-slate-500 text-capitalize mb-3">Cropping and Alignment</p>


                {/* aspect ratio  */}
                <AspectRatio
                    handleAspectRatio={handleAspectRatio}
                    handleOpenRatio={handleOpenRatio}
                    handleVerticalAlignment={handleVerticalAlignment}
                    cropAlignment={cropAlignment}
                />


                {/* ********************exact %%%%%%%%%%%%%%%%%%%% */}

                <Exact
                    handleOpenExact={handleOpenExact}
                    handleExactHeight={handleExactHeight}
                    handleExactWidth={handleExactWidth}
                    handleVerticalAlignment={handleVerticalAlignment}
                    cropAlignment={cropAlignment}

                />

                {/* margin  */}
                <Margin
                    handleOriginalMargin={handleOriginalMargin}
                    cropAlignment={cropAlignment}
                    handleOpenExact={handleOpenExact}
                    handleTopMargin={handleTopMargin}
                    handleBottomMargin={handleBottomMargin}
                    handleLeftMargin={handleLeftMargin}
                    handleRightMargin={handleRightMargin}
                    handleOpenMargin={handleOpenMargin}
                    handleRotate={handleRotate}
                />


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