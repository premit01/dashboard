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



    return (
        <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
            <p className="text-sm text-slate-500 text-capitalize mb-3">File Settings</p>
            <div>
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
            </div>
        </div>
    );
};

export default FileSettings;