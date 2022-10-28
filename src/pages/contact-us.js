import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContactInfo from "../components/contactInfo"
import PrimaryForm from "../components/primary-form/primary-form"
import "../styles/contact-us.css"

const ContactUs = ({ data, location }) => {
  const contactUsData = data.prismicHomepage.data
  return (
    <Layout location={location} title="Master Roofing">
      {console.log("contactUsData", contactUsData)}
      <section className="inner-page">
        <div className="section__inner">
          <div className="section-title-wrap text-container">
            <h1>{contactUsData.contactpage_title.text}</h1>
            <p className="section-subtitle">
              {contactUsData.contactpage_subtext.text}
            </p>
          </div>
          <div className="content-grid">
            <ContactInfo />
            <PrimaryForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactUs

export const pageQuery = graphql`
  query {
    prismicHomepage {
      id
      data {
        qr_code {
          fixed {
            src
          }
        }
        contactpage_contact_form_success {
          richText
        }
        contactpage_subtext {
          text
        }
        contactpage_subtext_for_contact_form {
          text
        }
        contactpage_title {
          text
        }
        contactpage_title_for_contact_form {
          text
        }
        contactpage_title_for_contact_info {
          text
        }
      }
    }
  }
`
