import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch ?</h3>
            <p>
              I'm baby enamel pin brunch man braid pabst truffaut occupy schlitz
              affogato marfa master cleanse bespoke. Deep v try-hard selfies
              butcher 90's meggings af fixie wolf man braid blue bottle swag.
            </p>
            <p>
              Sriracha cliche squid XOXO gochujang freegan paleo authentic kogi.
              Unicorn kombucha ugh migas marfa. Butcher helvetica vice photo
              booth glossier semiotics chia.
            </p>
            <p>
              Poutine skateboard gastropub master cleanse, dreamcatcher
              literally air plant intelligentsia prism sustainable vaporware
              offal scenester tousled celiac. Man bun twee scenester poutine
              shoreditch, pork belly brooklyn viral next level hoodie kombucha
              cardigan kitsch.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" className="btn block">
                  Send
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
