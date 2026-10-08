import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { contactCopy, site } from '../data/portfolio.ts'
import type { ContactField, ContactFormErrors, ContactFormValues } from '../lib/contactForm.ts'
import {
  emptyContactForm,
  hasContactErrors,
  validateContactForm,
} from '../lib/contactForm.ts'
import styles from './Contact.module.css'

const fieldIds: Record<ContactField, string> = {
  name: 'contact-name',
  email: 'contact-email',
  message: 'contact-message',
}

/** Shows the URL without the protocol so a REPLACE placeholder is obvious. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

/**
 * Closing section plus a browser-only form.
 * Validation lives in contactForm.ts. The short delay is only so the loading
 * state is visible — nothing is sent to a server.
 */
export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const pendingName = useRef('')
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    }
  }, [])

  const updateField = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setSuccess('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submitting) return

    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)

    if (hasContactErrors(nextErrors)) {
      setSuccess('')
      const firstInvalid = (Object.keys(nextErrors) as ContactField[]).find(
        (field) => nextErrors[field],
      )
      if (firstInvalid) document.getElementById(fieldIds[firstInvalid])?.focus()
      return
    }

    pendingName.current = values.name.trim()
    setSubmitting(true)
    timerRef.current = window.setTimeout(() => {
      const name = pendingName.current
      setValues(emptyContactForm)
      setSubmitting(false)
      setSuccess(contactCopy.success.replace('{name}', name))
    }, 700)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <p className={styles.kicker}>{contactCopy.kicker}</p>
        <h2 id="contact-heading" className={styles.title}>
          {contactCopy.heading}
        </h2>
        <p className={styles.lead}>{contactCopy.lead}</p>
        <div className={styles.layout}>
          <div>
            <dl className={styles.channels}>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={site.githubUrl}>{displayUrl(site.githubUrl)}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={site.linkedinUrl}>{displayUrl(site.linkedinUrl)}</a>
                </dd>
              </div>
            </dl>
            <a className={styles.resume} href={site.resumePath} download>
              Download Resume
            </a>
          </div>

          <form className={styles.form} noValidate onSubmit={handleSubmit} aria-busy={submitting}>
            <Field
              id="contact-name"
              label="Name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              error={errors.name}
              disabled={submitting}
              onChange={(value) => {
                updateField('name', value)
              }}
            />
            <Field
              id="contact-email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              error={errors.email}
              disabled={submitting}
              onChange={(value) => {
                updateField('email', value)
              }}
            />
            <div className={styles.field}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                disabled={submitting}
                className={errors.message ? styles.invalid : undefined}
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                onChange={(event) => {
                  updateField('message', event.target.value)
                }}
              />
              {errors.message ? (
                <p className={styles.error} id="contact-message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <p className={styles.note}>{contactCopy.formNote}</p>
            {success ? (
              <p className={styles.success} role="status">
                {success}
              </p>
            ) : null}
            <button className={styles.submit} type="submit" disabled={submitting}>
              {submitting ? contactCopy.sending : contactCopy.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  id: string
  label: string
  name: ContactField
  type: 'text' | 'email'
  autoComplete: string
  value: string
  error?: string
  disabled: boolean
  onChange: (value: string) => void
}

function Field({
  id,
  label,
  name,
  type,
  autoComplete,
  value,
  error,
  disabled,
  onChange,
}: FieldProps) {
  const errorId = `${id}-error`
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        disabled={disabled}
        className={error ? styles.invalid : undefined}
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
      {error ? (
        <p className={styles.error} id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
}
