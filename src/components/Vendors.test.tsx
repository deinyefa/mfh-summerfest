import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Vendors from './Vendors'
import { describe, it, expect } from 'vitest'

describe('Vendors Component', () => {
    it('renders the form initially', () => {
        render(<Vendors />)
        expect(screen.getByText('Vendor Application')).toBeInTheDocument()
    })

    it('submits the form successfully and displays success message', async () => {
        const user = userEvent.setup()
        render(<Vendors />)

        // Fill out required text fields
        await user.type(screen.getByPlaceholderText(/Auntie Grace's Kitchen/i), 'Test Business')
        await user.type(screen.getByPlaceholderText('Full name'), 'Alex Smith')
        await user.type(screen.getByPlaceholderText('(613) 555-0000'), '555-0300')
        await user.type(screen.getByPlaceholderText('you@example.com'), 'alex@test.com')

        // Select product type and tier
        await user.selectOptions(
            screen.getAllByRole('combobox')[0] as HTMLElement,
            'Food & Beverages'
        )

        // Description textarea
        await user.type(screen.getByPlaceholderText(/Tell us a bit/i), 'Amazing food and drinks')

        await user.selectOptions(
            screen.getAllByRole('combobox')[1] as HTMLElement,
            'Early Bird — $60'
        )

        // Checkbox agreement
        await user.click(screen.getByRole('checkbox'))

        // Submit the form
        const submitBtn = screen.getByRole('button', { name: /Submit Application/i })
        await user.click(submitBtn)

        // Assert transitions and final success text
        expect(submitBtn).toBeDisabled()
        expect(submitBtn).toHaveTextContent(/Submitting.../i)

        await waitFor(() => {
            expect(screen.getByText('Application Received!')).toBeInTheDocument()
        })
    })
})
