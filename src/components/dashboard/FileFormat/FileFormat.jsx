

const FileFormat = ({ formatOptions, handleFormatChange, selectedFormate }) => {
    return (

        <div className="shadow-lg border bg-white rounded-lg border-slate-500 my-10 p-5" >
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

        </div >
    );
};

export default FileFormat;