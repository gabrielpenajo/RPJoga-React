import { Link } from "react-router-dom";

export function Button({label, color, link, action, type, isValid}) {
    let buttonClasses = '';

    if(color === 'secondary') {
        buttonClasses = 'group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-3 px-4 text-sm font-semibold text-white hover:bg-success cursor-pointer';
    } else if (color === 'success') {
        buttonClasses = 'group relative flex w-full justify-center rounded-md border border-transparent bg-success py-3 px-4 text-sm font-semibold text-white hover:bg-secondary cursor-pointer';
    }

    if (isValid === false) {
        buttonClasses = 'group relative flex w-full justify-center rounded-md border border-transparent bg-slate-700 py-3 px-4 text-sm font-semibold text-white';
    }
    
    if(typeof(action) === 'string') {
        action = () => {}
    }

    if(link) {
        return <Link to={link} className={buttonClasses}>{label}</Link>
    } else if(action) {
        return <button onClick={action} className={buttonClasses} type={type} disabled={isValid === false}>{label}</button>
    } else {
        throw 'Button must have either link or action property defined';
    } 
}