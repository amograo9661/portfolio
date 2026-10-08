/**
 * Front-end contact form.
 * Validation lives here so the component only handles state and rendering.
 * Nothing is sent to a server — see the note in portfolio.ts (contactCopy.formNote).
 */

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export type ContactField = keyof ContactFormValues

export type ContactFormErrors = Partial<Record<ContactField, string>>

export const emptyContactForm: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (name.length === 0) {
    errors.name = 'Please enter your name.'
  } else if (name.length < 2) {
    errors.name = 'Name should be at least 2 characters.'
  }

  if (email.length === 0) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter an email address like name@example.com.'
  }

  if (message.length === 0) {
    errors.message = 'Please write a short message.'
  } else if (message.length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

export function hasContactErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
