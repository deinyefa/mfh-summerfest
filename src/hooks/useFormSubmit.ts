import { useState, SyntheticEvent } from "react"
import toast from "react-hot-toast"

export function useFormSubmit(apiEndpoint: string = '/api/submit') {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(form)
        const data: Record<string, string | string[]> = {}

        formData.forEach((value, key) => {
            // Handle checkboxes explicitly by casting arrays
            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key] as string]
                }
                (data[key] as string[]).push(value.toString())
            } else {
                data[key] = value.toString()
            }
        })

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData.error || "Failed to submit form")
            }

            setIsSubmitted(true)
        } catch (error) {
            console.error(error)
            toast.error(error instanceof Error ? error.message : "An error occurred. Please try again.")
            setIsSubmitting(false)
        }
    }

    return { isSubmitted, isSubmitting, handleSubmit }
}
