import cat from '../../../assets/images/photo/cat.png'
// import { MdRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";






import { useState } from "react";
import CroppingAndAlignment from '../../../components/dashboard/CroppingAndAlignment/CroppingAndAlignment';

const Specifications = () => {

    const [selectedFormate, setSelectedFormate] = useState({
        jpeg: "",
        tiff: "",
        png: "",
        psd: ""
    })

    console.log(selectedFormate)
    // cropping and alignment 
    const [isTrim, setTrim] = useState(false)


    const [background, setBackground] = useState("")
    const [selectedBackground, setSelectedBackground] = useState("#000")



    // format options 

    const formatOptions = [
        { id: 1, value: 'jpeg' },
        { id: 2, value: 'tiff' },
        { id: 3, value: 'png' },
        { id: 4, value: 'psd' },

    ]

    // background options 

    const backgroundOptions = [
        { id: "back1", value: 'white' },
        { id: "back2", value: 'transparent' },
        { id: "back3", value: 'keep original background' },
        { id: "back4", value: 'custom color' },
    ]


    const handleBackgroundColor = (event) => {
        event.preventDefault()
        const colorValue = event.target.value;
        console.log('color', colorValue)
        setSelectedBackground(colorValue);
    };


    const handleFormatChange = (e) => {
        const eventFormat = e.target.value
        console.log('get format', typeof (eventFormat))

        setSelectedFormate((selectedFormate) => ({ ...selectedFormate, [eventFormat]: selectedFormate[eventFormat] === eventFormat ? '' : eventFormat }))



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
                            backgroundOptions.map(back => <div
                                key={back.id}
                                className="form-control  dropdown">
                                <label className="cursor-pointer label justify-start ">
                                    <input onChange={() => setBackground(back.value)} type="checkbox" checked={background === back.value} className="checkbox checkbox-warning mr-5" />
                                    <span className=" uppercase">{back.value}</span>
                                </label>
                            </div>)
                        }
                        <div className={`${background !== 'custom color' ? 'hidden' : ''} p-2  duration-500 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52`}>

                            <div className='border w-full p-2'>
                                <input onChange={handleBackgroundColor} type="color" className='w-full' />
                            </div>

                        </div>


                    </div>


                    {/* cropping and alignment  */}
                    <CroppingAndAlignment isTrim={isTrim} setTrim={setTrim} />



                </div>

                {/* preview ************************ image ************************************* */}
                <div >
                    <div
                        // style={background === 'custom color' && { backgroundColor: `${selectedBackground}` }}
                        className={`
                    ${background === 'white' ? 'bg-white'
                                : background === 'transparent' ? 'bg-transparent'
                                    : background === 'keep original background' ? 'bg-none' :
                                        background === 'custom color' ? `bg-[${selectedBackground}]`
                                            : ''
                            } border   max-h-[500px] border-slate-300`}>
                        <img src={cat} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specifications;