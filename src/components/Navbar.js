import React from 'react'

function Navbar() {
    return (
        <nav class="navbar  navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="">Tindog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#footer">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#pricing">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#cta">Download</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
