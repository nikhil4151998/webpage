import React from "react"
import SideNav from "./SideNav"
import DisplayContent from "./DisplayContent"

function MainContent() {
    return (
        <div class="d-flex">
            <SideNav />
            <DisplayContent />
        </div>
    )
}

export default MainContent
