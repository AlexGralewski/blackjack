import React from "react"
import {Link} from "react-router-dom"

import Footer from "./Footer"

function HighScores() {
  return(
    <div className="high-scores">
      <h1>High Scores</h1>
      <Link to="/">
        <button>
          Back
        </button>
      </Link>
      <Footer />
    </div>
  )
}

export default HighScores