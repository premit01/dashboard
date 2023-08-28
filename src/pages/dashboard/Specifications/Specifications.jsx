import cat from '../../../assets/images/photo/cat.png'

import { useState } from "react";
import CroppingAndAlignment from '../../../components/dashboard/CroppingAndAlignment/CroppingAndAlignment';

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
        aspectRatio: '',
        ratioAlignment: '',
        isOpenExact: false,
        exactHeight: 0,
        exactWidth: 0,
        exactAlignment: '',
        isOpenMargin: false,
        topMargin: 0,
        bottomMargin: 0,
        leftMargin: 0,
        rightMargin: 0,
        isRotateUpright: false
    })



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

            <div className=" grid grid-cols-2 gap-x-5">
                <div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Order Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered border-2 focus:border-gray-400 focus:outline-0  w-full " />
                    </div>



                    {/* file format  */}
                    <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5">
                        <p className="text-sm text-slate-500 text-capitalize mb-3">File formate</p>

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
                    <CroppingAndAlignment cropAlignment={cropAlignment} setCropAlignment={setCropAlignment} />



                </div>

                {/* preview ************************ image ************************************* */}
                <div >
                    <div
                        className={` border fixed  h-[500px] w-full border-slate-300`}
                        style={
                            {

                                backgroundColor: selectedBackground?.selectedBackgroundColor,
                                verticalAlign: cropAlignment?.ratioAlignment,

                            }
                        }
                    >
                        <img src={cat} alt="" className='h-[300px] max-w-full  border-black' style={
                            {
                                aspectRatio: cropAlignment?.aspectRatio,

                            }
                        } />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specifications;