import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MoreGames from './MoreGames'
import { describe, it, expect } from 'vitest'

describe('MoreGames Component', () => {
    it('renders the form initially', () => {
        render(<MoreGames />)
        expect(screen.getByText('Sign Up for More Games')).toBeInTheDocument()
    })

    it('submits the form successfully and displays success message', async () => {
        const user = userEvent.setup()
        render(<MoreGames />)

        // Fill out required text fields
        await user.type(screen.getByPlaceholderText('Grace'), 'John')
        await user.type(screen.getByPlaceholderText('Okafor'), 'Doe')
        await user.type(screen.getByPlaceholderText('grace@email.com'), 'john@test.com')
        await user.type(screen.getByPlaceholderText('(613) 555-0000'), '555-0100')
        await user.type(screen.getByPlaceholderText('e.g. 24'), '25')
        await user.type(screen.getByPlaceholderText('e.g. Aflame Church'), 'Test Church')

        // Click a checkbox
        await user.click(screen.getByRole('checkbox', { name: /Sack Race/i }))

        // Submit the form
        const submitBtn = screen.getByRole('button', { name: /Register for Games/i })
        await user.click(submitBtn)

        // Assert that status changes correctly and we eventually see the success view
        expect(submitBtn).toBeDisabled()
        expect(submitBtn).toHaveTextContent(/Submitting.../i)

        await waitFor(() => {
            expect(screen.getByText("You're All Set!")).toBeInTheDocument()
        })
    })
})
