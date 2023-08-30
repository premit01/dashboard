
import shoes from '../../../assets/images/photo/shoes (1).png'
import { useState } from "react";
import CroppingAndAlignment from '../../../components/dashboard/CroppingAndAlignment/CroppingAndAlignment';
import FileSettings from '../../../components/dashboard/FileSettings/FileSettings';
import FileFormat from '../../../components/dashboard/FileFormat/FileFormat';
import BackgroundOptionSection from '../BackgroundOptionSection/BackgroundOptionSection';

const Specifications = () => {

    const [selectedFormate, setSelectedFormate] = useState({
        jpeg: "",
        tiff: "",
        png: "",
        psd: ""
    })
    // background change state 
    const [selectedBackground, setSelectedBackground] = useState({
        isOpenCustomOption: false,
        selectedBackgroundColor: ''
    })

    // cropping and alignment state
    const [cropAlignment, setCropAlignment] = useState({
        isOpenTrim: false,
        isOpenRatio: false,
        isOpenExact: false,
        isOpenMargin: false,
        isRotateUpright: false,
        isOriginalMargin: true,
        isRotate: false,
        aspectRatio: '',
        ratioAlignment: '',
        exactHeight: '',
        exactWidth: '',
        exactAlignment: '',
        topMargin: '',
        bottomMargin: '',
        leftMargin: '',
        rightMargin: '',

    })


    const [ratioWidth, ratioHeight,] = cropAlignment.aspectRatio.split('/').map(Number)

    console.log(ratioHeight, ratioWidth)

    const [fileSettings, setFileSettings] = useState({
        isDpi: false,
        isOpenMaxDimension: false,
        isOpenMaxFile: false,
        isOpenColorProfile: false,
        isShadow: false,
        isReflection: false,
        isClippingPath: false,
        isMask: false,
        isRemoveDust: false,

    })

    console.log('fileSettings', fileSettings)



    // format options 
    const formatOptions = [
        { id: 1, value: 'jpeg' },
        { id: 2, value: 'tiff' },
        { id: 3, value: 'png' },
        { id: 4, value: 'psd' },

    ]

    // background options 
    const backgroundOptions = [
        { id: "back1", title: 'white', value: 'white' },
        { id: "back2", title: 'transparent', value: 'transparent' },
        { id: "back3", title: 'keep original background', value: '' },

    ]

    // handle change format 
    const handleFormatChange = (e) => {
        const checkedFormat = e.target.value
        setSelectedFormate((selectedFormate) => ({ ...selectedFormate, [checkedFormat]: selectedFormate[checkedFormat] === checkedFormat ? '' : checkedFormat }))

    }


    // handle background color 
    const handleBackgroundColor = (event) => {

        const color = event.target.value;
        console.log('color', color)
        // hide custom option 
        setSelectedBackground((selectedBackground) => ({ ...selectedBackground, isOpenCustomOption: color.startsWith('#') || false }))
        // apply new background 
        setSelectedBackground((selectedBackground) => ({ ...selectedBackground, selectedBackgroundColor: color }))
        console.log('selectedBackground', selectedBackground?.selectedBackgroundColor)
    };

    const handleOptionOpen = (option) => {
        setSelectedBackground((selectedBackground) => ({ ...selectedBackground, isOpenCustomOption: option }))
        console.log('isOpen', selectedBackground?.isOpenCustomOption)


    }

    return (
        <div>

            <div className=" md:grid grid-cols-2 gap-x-5">
                <div className='order-last'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Order Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered border-2 focus:border-gray-400 focus:outline-0  w-full " />
                    </div>
                    {/* file format  */}
                    <FileFormat
                        formatOptions={formatOptions}
                        handleFormatChange={handleFormatChange}
                        selectedFormate={selectedFormate}
                    />


                    {/* ,,,handleOptionOpen */}


                    {/* background ********************************************* */}
                    <BackgroundOptionSection
                        backgroundOptions={backgroundOptions}
                        handleBackgroundColor={handleBackgroundColor}
                        selectedBackground={selectedBackground}
                        handleOptionOpen={handleOptionOpen}
                    />


                    {/* cropping and alignment  */}
                    <CroppingAndAlignment
                        cropAlignment={cropAlignment}
                        setCropAlignment={setCropAlignment}
                    />

                    {/* file settings  */}
                    <FileSettings
                        fileSettings={fileSettings}
                        setFileSettings={setFileSettings}
                    />

                    <button className='btn btn-warning py-0 mb-10 rounded-sm btn-block'>Create</button>
                </div>

                {/* preview ************************ image ************************************* */}
                <div className='order-first md:order-last'>
                    <div className=' top-16 w-full  bg-green-50 h-full p-0 m-0`'>
                        <div
                            // flex sticky  top-0 items-center justify-center
                            className='relative w-full h-0 pb-[66%] overflow-hidden'
                            style={
                                {

                                    backgroundColor: selectedBackground?.selectedBackgroundColor,
                                    position: 'relative',
                                    width: "100%",
                                    height: cropAlignment.isOpenRatio ? 0 : 'auto',
                                    paddingBottom: cropAlignment.isOpenRatio ? `${(ratioHeight / ratioWidth) * 100}%` : ''


                                }
                            }
                        >

                            {/* h-full p-0 m-0  w-full  border-black */}
                            <img src={shoes} alt="" className='' style={
                                {
                                    position: 'absolute',
                                    // width: '100%',
                                    // height: "auto",
                                    // aspectRatio: cropAlignment?.aspectRatio,
                                    objectFit: 'contain',
                                    [cropAlignment?.ratioAlignment]: 0,
                                    minHeight: "200px",
                                    minWidth: "200px",
                                    height: cropAlignment?.isOpenRatio ? "auto" : cropAlignment?.exactHeight + "px",
                                    width: cropAlignment?.isOpenRatio ? "100%" : cropAlignment?.exactWidth + "px",
                                    marginTop: cropAlignment?.topMargin ? cropAlignment?.topMargin + 'px' : '',
                                    marginBottom: cropAlignment?.bottomMargin ? cropAlignment?.bottomMargin + 'px' : '',
                                    marginLeft: cropAlignment?.leftMargin ? cropAlignment?.leftMargin + 'px' : '',
                                    marginRight: cropAlignment?.rightMargin ? cropAlignment?.rightMargin + 'px' : '',
                                    transform: `rotate(${cropAlignment?.isRotate ? '180deg' : '0'})`
                                }
                            } />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Specifications;