import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Volunteer from './Volunteer'
import { describe, it, expect } from 'vitest'

describe('Volunteer Component', () => {
    it('renders the form initially', () => {
        render(<Volunteer />)
        expect(screen.getByText('Sign Up to Volunteer')).toBeInTheDocument()
    })

    it('submits the form successfully and displays success message', async () => {
        const user = userEvent.setup()
        render(<Volunteer />)

        // Fill out required text fields based on placeholders
        await user.type(screen.getByPlaceholderText('Grace'), 'Jane')
        await user.type(screen.getByPlaceholderText('Okafor'), 'Doe')
        await user.type(screen.getByPlaceholderText('grace@email.com'), 'jane@test.com')
        await user.type(screen.getByPlaceholderText('(613) 555-0000'), '555-0200')

        // Select a role
        await user.selectOptions(screen.getByRole('combobox'), 'Event Setup & Teardown')

        // Submit the form
        const submitBtn = screen.getByRole('button', { name: /Sign Me Up/i })
        await user.click(submitBtn)

        // Assert transitions and final success text
        expect(submitBtn).toBeDisabled()
        expect(submitBtn).toHaveTextContent(/Submitting.../i)

        await waitFor(() => {
            expect(screen.getByText('Welcome to the Team!')).toBeInTheDocument()
        })
    })
})
