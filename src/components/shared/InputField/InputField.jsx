

const InputField = ({ eventHandler, DefaultInput, inputLabel }) => {
    return (
        <div className="relative ">
            <label htmlFor="UserEmail" className="ml-2 text-xs capitalize">
                {inputLabel}
            </label>
            <input
                onChange={eventHandler}
                defaultValue={DefaultInput}
                type="text"
                id="UserEmail"
                className="w-full rounded-md py-2 px-3 border-[#ddd] border outline-0 pe-10 shadow-sm sm:text-sm"
            />
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 mt-3">
                px
            </span>
        </div>
    );
};

export default InputField;