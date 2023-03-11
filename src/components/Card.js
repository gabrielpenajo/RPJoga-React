import { useState } from "react";

export function Card({ title, image, imageAlt, content, details }) {
    const [isOpen, setOpen] = useState(false);

    const cardRef = (
        <div id="card" onClick={() => setOpen(true)}
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
        <dialog id="card-modal" open
            class="absolute min-h-full min-w-full drop-shadow-2xl bg-transparent
                   flex justify-center">
            <div class="grid w-[75%] h-fit bg-white p-3 rounded-lg">
                <div id="header" class="flex flex-row justify-between">
                    <h3 class="font-bold text-xl">{title}</h3>
                    <button onClick={() => setOpen(false)}>X</button>
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
            <>
                {modalRef}
                {cardRef}
            </> 
        );
    else return (
        <>
            {cardRef}
        </>
    );
}