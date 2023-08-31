

const BackgroundOptionSection = ({ selectedBackground, setSelectedBackground }) => {

    // background options 
    const backgroundOptions = [
        { id: "back1", title: 'white', value: 'white' },
        { id: "back2", title: 'transparent', value: 'transparent' },
        { id: "back3", title: 'keep original background', value: '' },

    ]


    const handlePropertyChange = (property, value) => {
        setSelectedBackground((prevState) => ({ ...prevState, [property]: value }))
    }

    const handleBackgroundColor = (event) => {
        const color = event.target.value;
        console.log('color', color)
        // hide custom option 

        handlePropertyChange('selectedBackgroundColor', color)

        if (!color.startsWith('#')) {
            handlePropertyChange('isOpenCustomOption', false)
        }

    };

    const handleOpenCustom = (isOpen) => {
        handlePropertyChange('isOpenCustomOption', isOpen)

    }



    return (
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
                        onChange={() => handleOpenCustom(!selectedBackground?.isOpenCustomOption)}
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
    );
};

export default BackgroundOptionSection;