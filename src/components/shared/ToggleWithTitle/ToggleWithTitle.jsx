

const ToggleWithTitle = ({ eventHandler, stateName, property, toggleLabel, toggleTitle }) => {
    return (
        <div className="flex items-center justify-between my-5">
            <div>
                <label className="capitalize" htmlFor="">{toggleLabel}</label>
                <span className='text-xs  block text-slate-400'>{toggleTitle}</span>
            </div>
            <input
                onChange={() => eventHandler(!stateName?.[property])}
                checked={stateName?.[property]}
                type="checkbox"
                className="toggle toggle-warning toggle-sm"
            />
        </div>
    );
};

export default ToggleWithTitle;