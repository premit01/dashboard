

const ToggleButton = ({ eventHandler, cropAlignment, toggleLabel }) => {
    return (
        <div className="flex items-center justify-between my-5">
            <label className="capitalize" htmlFor="">{toggleLabel}</label>
            <input
                onChange={() => eventHandler(!cropAlignment?.isOpenMargin)}
                checked={cropAlignment?.isOpenMargin}
                type="checkbox"
                className="toggle toggle-warning toggle-sm"
            />
        </div>
    );
};

export default ToggleButton;