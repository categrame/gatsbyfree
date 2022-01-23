import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply recipes</h1>
              <h4>No Fluff, juste recipes</h4>
              <input type="range" min="0" max="15" step="1" />
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
