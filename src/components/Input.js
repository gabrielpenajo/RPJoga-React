export function Input({ id, value, label, type, size, onChange }) {

    let sizeClass = null;
    if (size === 'full') {
        sizeClass = '';
    } else if (size === 'half') {
        sizeClass = 'sm:w-[48%]';
    } else {
        throw 'size must be full or half';
    }

    const outerDivClasses = "space-y-px rounded-md shadow-sm mb-6" + sizeClass;

    return <div className={outerDivClasses}>
        <label htmlFor={id} className="text-white text-l mb-2">{label}</label>
        <input value={value} onChange={onChange} id={id} type={type} className="relative block w-full appearance-none rounded-lg mt-2 px-3 py-3 text-black placeholder-gray-500 sm:text-sm" />
    </div>;
}