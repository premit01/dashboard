
import shoes from '../../../assets/images/photo/shoes (1).png'

import { useState } from "react";
import CroppingAndAlignment from '../../../components/dashboard/CroppingAndAlignment/CroppingAndAlignment';
import FileSettings from '../../../components/dashboard/FileSettings/FileSettings';

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


    const [ratioWidth, ratioHeight,] = cropAlignment?.aspectRatio?.split('/').map(Number)

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
                <div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Order Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered border-2 focus:border-gray-400 focus:outline-0  w-full " />
                    </div>



                    {/* file format  */}
                    <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
                        <p className="text-sm  text-slate-500 text-capitalize mb-3">File formate</p>

                        {
                            formatOptions.map(op => <div
                                key={op?.id}
                                className='mb-5 '
                            >
                                <label className='flex items-center' htmlFor="">
                                    <input
                                        onChange={handleFormatChange}
                                        checked={selectedFormate[op.value]}
                                        value={op.value}
                                        type="radio"
                                        className='accent-primary w-5 h-5 mr-5  bg-red-200'

                                    />
                                    <span className='uppercase'>{op.value}</span>
                                </label>
                            </div>)
                        }

                    </div>

                    {/* background ********************************************* */}
                    <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
                        <p className="text-sm text-slate-500 text-capitalize mb-3">Background</p>

                        {
                            backgroundOptions.map(({ id, title, value }) => <div
                                key={id}
                                className='mb-5 '
                            >
                                <label className='flex items-center' htmlFor="">
                                    <input
                                        onChange={handleBackgroundColor}
                                        checked={selectedBackground?.selectedBackgroundColor === value}
                                        value={value}
                                        type="radio"
                                        className='accent-primary w-5 h-5 mr-5  bg-red-200'

                                    />
                                    <span className='uppercase'>{title}</span>
                                </label>
                            </div>
                            )

                        }

                        {/* custom radio  */}
                        <div className='mb-5 '>
                            <label className='flex items-center' htmlFor="">
                                <input
                                    onChange={() => handleOptionOpen(!selectedBackground?.isOpenCustomOption)}
                                    checked={selectedBackground?.isOpenCustomOption}
                                    // value={!setSelectedBackground?.selectedBackgroundColor}
                                    type="radio"
                                    className='accent-primary w-5 h-5 mr-5  bg-red-200'

                                />
                                <span className='uppercase'>Custom Background</span>
                            </label>
                        </div>

                        <div className={`${!selectedBackground?.isOpenCustomOption ? 'hidden' : ''} p-2  duration-500 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52`}>

                            <div className='border w-full p-2'>
                                <input onChange={handleBackgroundColor} type="color" className='w-full' />
                            </div>

                        </div>


                    </div>


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


                </div>

                {/* preview ************************ image ************************************* */}
                <div className=''>
                    <div className=' top-16 w-full  bg-green-50 h-full p-0 m-0`'>
                        <div
                            // flex sticky  top-0 items-center justify-center
                            className='relative w-full h-0 pb-[66%] overflow-hidden'
                            style={
                                {

                                    backgroundColor: selectedBackground?.selectedBackgroundColor,
                                    position: 'relative',
                                    width: "100%",
                                    height: 0,
                                    paddingBottom: `${(ratioHeight / ratioWidth) * 100}%`


                                }
                            }
                        >

                            {/* h-full p-0 m-0  w-full  border-black */}
                            <img src={shoes} alt="" className='' style={
                                {
                                    position: 'absolute',
                                    width: '100%',
                                    height: "auto",
                                    // aspectRatio: cropAlignment?.aspectRatio,
                                    objectFit: 'contain',
                                    [cropAlignment?.ratioAlignment]: 0,

                                    // height: cropAlignment?.exactHeight + "px",
                                    // width: cropAlignment?.exactWidth + "px",
                                    // marginTop: cropAlignment?.topMargin ? cropAlignment?.topMargin + 'px' : '',
                                    // marginBottom: cropAlignment?.bottomMargin ? cropAlignment?.bottomMargin + 'px' : '',
                                    // marginLeft: cropAlignment?.leftMargin ? cropAlignment?.leftMargin + 'px' : '',
                                    // marginRight: cropAlignment?.rightMargin ? cropAlignment?.rightMargin + 'px' : '',
                                    // transform: `rotate(${cropAlignment?.isRotate ? '180deg' : '0'})`
                                }
                            } />
                        </div>
                    </div>
                </div>
                <button className='btn btn-warning py-0 mb-10 rounded-sm'>Create</button>
            </div>
        </div>
    );
};

export default Specifications;