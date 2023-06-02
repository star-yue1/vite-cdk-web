import { useEffect } from "react"

export const useModifyBackground = () => {
    useEffect(() => {
        const body = document.querySelector('body')
        body?.classList.add('signin')
        return () => {
            body?.classList.remove('signin')
        }
    },[])
}