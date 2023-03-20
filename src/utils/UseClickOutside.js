import { useEffect } from "react"

export const useClickOutside = (ref, handler) => {
    useEffect(() => {
        let handlerChecker = (event) => {
            if (!ref || !ref.current)
                return
            if (!ref.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener("mousedown", handlerChecker)

        return () => {
            document.removeEventListener("mousedown", handlerChecker)
        }
    })
}