import React from "react"
import Top from "../layout/top"
import Main from "../layout/main"
import Bottom from "../layout/bottom"

/**
 *
 * @returns {boolean}
 * @constructor
 */

function Home() {
    return (
        <div>
            <Top />
            <Main />
            <Bottom />
        </div>
    )
}

export default Home;