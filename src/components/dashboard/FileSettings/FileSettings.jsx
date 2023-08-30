import ToggleWithTitle from "../../shared/ToggleWithTitle/ToggleWithTitle";


const FileSettings = ({ fileSettings, setFileSettings }) => {
    // console.log(fileSettings)

    const handlePropertyChange = (property, value) => {
        setFileSettings(prevSettings => ({
            ...prevSettings, [property]: value
        }))
    }

    const handleDpiToggle = (isOpen) => {
        handlePropertyChange('isDpi', isOpen)
    }

    const handleMaximumDimensionToggle = isOpen => {
        handlePropertyChange('isOpenMaxDimension', isOpen)
    }

    const handleMaximumFileToggle = isOpen => {
        handlePropertyChange('isOpenMaxFile', isOpen)
    }

    const handleColorPToggle = isOpen => {
        handlePropertyChange('isOpenColorProfile', isOpen)
    }

    const handleShadowToggle = isOpen => {
        handlePropertyChange('isShadow', isOpen)
    }

    const handleReflectionToggle = isOpen => {
        handlePropertyChange('isReflection', isOpen)
    }

    const handleClippingToggle = isOpen => {
        handlePropertyChange('isClippingPath', isOpen)
    }

    const handleMaskToggle = isOpen => {
        handlePropertyChange('isMask', isOpen)
    }

    const handleDustRemoveToggle = isOpen => {
        handlePropertyChange('isRemoveDust', isOpen)
    }


    return (
        <div className="">
            <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
                <p className="text-sm text-slate-500 text-capitalize mb-3">File Settings</p>
                <div className="mb-5">
                    {/* DPI toggle  */}
                    <ToggleWithTitle
                        eventHandler={handleDpiToggle}
                        stateName={fileSettings}
                        property='isDpi'
                        toggleLabel='DPI'
                        toggleTitle='Keep Original DPI'
                    />

                    {/* maximum toggle  */}
                    <ToggleWithTitle
                        eventHandler={handleMaximumDimensionToggle}
                        stateName={fileSettings}
                        property='isOpenMaxDimension'
                        toggleLabel='Maximum Dimension'
                        toggleTitle={`No Maximum Dimension`}
                    />

                    {/* maximum file size  */}
                    <ToggleWithTitle
                        eventHandler={handleMaximumFileToggle}
                        stateName={fileSettings}
                        property={'isOpenMaxFile'}
                        toggleLabel='Maximum Dimension'
                        toggleTitle={`No Maximum File Size`}
                    />


                    {/* color profile  */}
                    <ToggleWithTitle
                        eventHandler={handleColorPToggle}
                        stateName={fileSettings}
                        property={'isOpenColorProfile'}
                        toggleLabel='Color Profile'
                        toggleTitle={`Keep Original Color Profile`}
                    />
                </div>

            </div>

            <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-5 p-5">
                {/* shadow start  */}

                <div>
                    <ToggleWithTitle
                        eventHandler={handleShadowToggle}
                        stateName={fileSettings}
                        property={'isShadow'}
                        toggleLabel='Shadow'
                    />

                    <ToggleWithTitle
                        eventHandler={handleReflectionToggle}
                        stateName={fileSettings}
                        property={'isReflection'}
                        toggleLabel='Reflection'
                    />

                    <ToggleWithTitle
                        eventHandler={handleClippingToggle}
                        stateName={fileSettings}
                        property={'isClippingPath'}
                        toggleLabel='InClude Clipping Path'
                    />
                    <ToggleWithTitle
                        eventHandler={handleMaskToggle}
                        stateName={fileSettings}
                        property={'isMask'}
                        toggleLabel='Keep Mask'
                    />

                    <ToggleWithTitle
                        eventHandler={handleDustRemoveToggle}
                        stateName={fileSettings}
                        property={'isRemoveDust'}
                        toggleLabel='Remove Dust and Scratches'
                    />
                </div>
            </div>




        </div>
    );
};

export default FileSettings;