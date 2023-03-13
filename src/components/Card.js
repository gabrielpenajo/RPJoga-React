import { useState } from "react";

export function Card({ title, image, imageAlt, content, details }) {
    const [isOpen, setOpen] = useState(false);

    const handleModalChange = (event) => {
        setOpen(!isOpen)
        event.stopPropagation()
    }

    const cardRef = (
        <div id="card" onClick={handleModalChange}
            class="w-full overflow-y-scroll sm:overflow-y-hidden
                h-32 border border-gray-300 hover:shadow-lg transition-shadow
                flex flex-row gap-2 rounded-lg cursor-pointer p-2">
            <div class="flex flex-shrink-0">
                <img class="w-28 h-28 rounded-md"
                    src={image}
                    alt={imageAlt}/>
                </div>
                <div class="flex flex-col flex-grow gap-2">
                <h3 class="font-bold text-xl">{title}</h3>
                <div class="flex flex-col">
                    {content}
                </div>
            </div>
        </div>
    )
    const modalRef = (
        <dialog id="card-modal"
            class="absolute min-w-full drop-shadow-2xl
                   flex justify-center bg-transparent"
            onMouseLeave={handleModalChange}>
            <div class="grid w-[75%] h-fit bg-white p-3 rounded-lg">
                <div id="header" class="flex flex-row justify-between">
                    <h3 class="font-bold text-xl">{title}</h3>
                    <button
                        type="button" class="inline-flex hover:text-gray-500 text-gray-400 items-center justify-center"
                        onClick={handleModalChange}
                    >
                        <span class="sr-only">Fechar menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-row gap-2">
                    <div class="flex flex-shrink-0">
                        <img class="w-28 h-28 rounded-md"
                            src={image}
                            alt={imageAlt}/>
                        </div>
                        <div class="flex flex-col flex-grow gap-2">
                        <div class="flex flex-col">
                            {content}
                            {details}
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )


    if (isOpen)
        return (
            <div>
                {modalRef}
                {cardRef}
            </div> 
        );
    else return (
        <div>
            {cardRef}
        </div>
    );
}