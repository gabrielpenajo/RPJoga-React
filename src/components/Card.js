import { useRef, useState } from "react";
import { useClickOutside } from "../utils/UseClickOutside";

export function Card({ title, image, description,  tags }) {
    const [isOpen, setOpen] = useState(false);

    const handleModalChange = (event) => {
        setOpen(!isOpen)
        event.stopPropagation()
    }

    const ref = useRef()
    const domNode = useClickOutside(ref, () => {
        setOpen(false)
    })

    const tagsElement = tags ? tags.split(',').map((tag, index) =>
        <li className="list-disc list-inside" key={index}>{tag}</li>
    ) : <></>;

    const cardRef = (
        <div id="card" onClick={handleModalChange}
            className="w-full overflow-y-hidden
                h-32 border border-gray-300 hover:shadow-lg transition-shadow
                flex flex-row gap-2 rounded-lg cursor-pointer p-2">
            <div className="flex flex-shrink-0">
                <img className="w-28 h-28 rounded-md"
                    src={image}
                    alt={"Foto de " + title}/>
                </div>
                <div className="flex flex-col flex-grow gap-2">
                <h3 className="font-bold text-xl">{title}</h3>
                <div className="flex flex-col">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
    const modalRef = (
        <dialog id="card-modal"
            className="absolute min-w-full drop-shadow-2xl
                   flex justify-center bg-transparent"
            >
            <div className="grid w-full md:w-[75%] h-fit bg-white p-3 rounded-lg" ref={ref}>
                <div id="header" className="flex flex-row justify-between">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <button
                        type="button" className="inline-flex hover:text-gray-500 text-gray-400 items-center justify-center"
                        onClick={handleModalChange}
                    >
                        <span className="sr-only">Fechar menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-shrink-0">
                        <img className="w-28 h-28 rounded-md"
                            src={image}
                            alt={"Foto de " + title}/>
                        </div>
                        <div className="flex flex-col flex-grow gap-2">
                        <div className="flex flex-col gap-2">
                            <p>{description}</p>
                            <p><b>Tags:</b></p>
                            <ul>
                                { tagsElement }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )


    if (isOpen)
        return (
            <div className="w-full">
                {modalRef}
                {cardRef}
            </div> 
        );
    else return (
        <div className="w-full">
            {cardRef}
        </div>
    );
}