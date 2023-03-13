import { useState } from "react"
import { MenuToggle } from "./MenuToggle"

export function Navbar({ onClick }) {
    const [isOpen, setOpen] = useState(false)

    const handleMenuClick = (event) => {
        setOpen(!isOpen)
        event.stopPropagation()
    }

    return (
    <>
        <div className="bg-main">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/rpgs.html">
                            <span className="sr-only">RPJoga</span>
                            <img className="h-8 w-8 sm:h-10 sm:w-10" src={`${process.env.PUBLIC_URL}/logo.png`} alt="RPJoga" />
                        </a>
                    </div>
                    <label
                        for="menuToggle" className="-my-2 -mr-2 md:hidden bg-main hover:bg-secondary rounded-md"
                        onClick={handleMenuClick}
                    >
                        <button type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-expanded="false">
                            <span className="sr-only">Abrir menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </label>
                    <nav className="hidden space-x-10 md:flex">
                        <a href="/rpgs" className="text-base font-medium text-gray-400 hover:text-secondary">RPGs</a>
                        <a href="/profile" className="text-base font-medium text-white hover:text-secondary">Meu perfil</a>
                    </nav>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="/login" className="whitespace-nowrap text-base font-medium text-white hover:text-secondary">Sair</a>
                    </div>
                </div>
            </div>
        </div>

        <MenuToggle isOpen={isOpen} setIsOpen={setOpen}></MenuToggle>
    </>
    )
}
