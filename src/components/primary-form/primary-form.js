import React, { useState } from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"

import "./primary-form.scss"

// import Namaste from "../../images/icons/hinduism.svg"
import Close from "../../images/icons/close.svg"

const PrimaryForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState("")
  const handleSubmissionStatus = axiosStatus => {
    setSubmissionStatus(axiosStatus)
  }

  const successMessageClose = () => {
    setSubmissionStatus("")
  }

  return (
    <Formik
      initialValues={{ name: "", contactInfo: "", message: "" }}
      validate={values => {
        const errors = {}
        if (!values.name) {
          errors.name = "Please enter you name"
        }
        if (!values.contactInfo) {
          errors.contactInfo =
            "Please enter you e-mail or phone number so that we could contact you"
        } else if (
          !(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.contactInfo
            ) || /^(\+\d{1,3}[- ]?)?\d{10}$/i.test(values.contactInfo)
          )
        ) {
          errors.contactInfo = "Invalid email or number"
        }
        if (!values.message) {
          errors.message = "Please enter the message so that we could help you"
        }
        if (values.policy === true) {
          errors.policy = "Please check to proceed"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false)
        axios
          .post("https://formspree.io/f/xqkjywar", values)
          .then(res => {
            resetForm()
            handleSubmissionStatus("success")
          })
          .catch(err => {
            handleSubmissionStatus("failure")
          })
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form primary-form">
          {submissionStatus === "failure" ? (
            <p className="form__main-error">
              Sorry, please send again, the message wasn't sent.
            </p>
          ) : (
            ""
          )}

          {submissionStatus === "success" ? (
            <div className="form-success">
              <button
                aria-label="Close"
                className="button form-success__close"
                onClick={successMessageClose}
              >
                <img
                  src={Close}
                  alt="close"
                  className="form-success__close-icon"
                />
                <span className="sr-only">Close</span>
              </button>
              <h4>Message received.</h4>
              <p>Thank you, we will contact you shortly.</p>
            </div>
          ) : (
            ""
          )}
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name*
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="form__input"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="form__unit-error"
              aria-required="true"
            />
          </div>
          <div className="form__group">
            <label htmlFor="contactInfo" className="form__label">
              Contact Info*
            </label>
            <Field
              type="text"
              name="contactInfo"
              id="contactInfo"
              className="form__input"
              aria-required="true"
              placeholder="e-mail or phone number"
            />
            <ErrorMessage
              name="contactInfo"
              component="p"
              className="form__unit-error"
            />
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message*
            </label>
            <Field
              as="textarea"
              rows="4"
              name="message"
              id="message"
              className="form__input"
              aria-required="true"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="form__unit-error"
            />
          </div>
          <div className="hidden">
            <label>Do you align with our policy</label>
            <Field name="policy" type="checkbox"></Field>
          </div>
          <div className="button-wrap">
            <button
              className="button button_primary"
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
            <button className="button button_primary button_white" type="reset">
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default PrimaryForm
