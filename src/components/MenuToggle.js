import { useState } from "react"

export function MenuToggle({ isOpen, setIsOpen }) {

    const handleMenuState = (event) => {
        setIsOpen(!isOpen)
        event.stopPropagation()
    }

    return (
    <div class={isOpen ? "" : "hidden"}>
        <div class="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="px-5 pt-5 pb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <a href="/rpgs.html"><img class="h-8 w-auto" src={`${process.env.PUBLIC_URL}/logo.png`} alt="RPJoga"/></a>
                        </div>
                        <label
                            class="rounded-md pl-2 pt-2 pr-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 -mr-2 items-center justify-center"
                            for="menuToggle">
                            <button
                                type="button" class="inline-flex hover:text-gray-500 text-gray-400 items-center justify-center"
                                onClick={handleMenuState}
                            >
                                <span class="sr-only">Fechar menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </label>
                    </div>
                    <div class="mt-6">
                        <nav class="grid gap-y-8">
                            <a href="/profile.html" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                <span class="material-symbols-outlined text-main">
                                    account_circle
                                </span>
                                <span class="ml-3 text-base font-medium text-gray-900">Meu perfil</span>
                            </a>

                            <a href="/rpgs.html" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                <span class="material-symbols-outlined text-main">
                                    book
                                </span>
                                <span class="ml-3 text-base font-medium text-gray-900">RPGs</span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div class="space-y-6 py-6 px-5">
                    <div>
                        <a href="/index.html"
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-main px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Sair</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}