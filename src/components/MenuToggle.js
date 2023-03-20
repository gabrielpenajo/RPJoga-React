import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../services/AuthService"
import { useClickOutside } from "../utils/UseClickOutside"

export function MenuToggle({ isOpen, setIsOpen, focusedLink }) {
    const navigate = useNavigate()
    const ref = useRef()

    const handleMenuState = (event) => {
        setIsOpen(!isOpen)
        event.stopPropagation()
    }

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        navigate("/")
    }

    const domNode = useClickOutside(ref, () => {
        setIsOpen(false)
    })

    return (
    <nav className={isOpen ? "" : "hidden"}>
        <div className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden" ref={ref}>
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="/rpgs.html"><img className="h-8 w-auto" src={`${process.env.PUBLIC_URL}/logo.png`} alt="RPJoga"/></a>
                        </div>
                        <label
                            className="rounded-md pl-2 pt-2 pr-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 -mr-2 items-center justify-center"
                            for="menuToggle">
                            <button
                                type="button" className="inline-flex hover:text-gray-500 text-gray-400 items-center justify-center"
                                onClick={handleMenuState}
                            >
                                <span className="sr-only">Fechar menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </label>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-y-8">
                            <a href="/profile" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                <span className="material-symbols-outlined text-main">
                                    account_circle
                                </span>
                                <span
                                    className={`ml-3 text-base font-medium ${focusedLink === 'profile' ? 'text-main' : "text-gray-900"}`}
                                >Meu perfil</span>
                            </a>

                            <a href="/rpgs" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                <span className="material-symbols-outlined text-main">
                                    book
                                </span>
                                <span
                                    className={`ml-3 text-base font-medium ${focusedLink === 'rpgs' ? 'text-main' : "text-gray-900"}`}
                                >RPGs</span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="space-y-6 py-6 px-5" onClick={handleLogout}>
                    <div>
                        <a href="/"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-main px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Sair</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}