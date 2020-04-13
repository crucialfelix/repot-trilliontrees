import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a role="button" href="/">
              <img src="/images/pot.png" width="28" height="28" />
            </a>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/signup">
                  <a href="/signup" className="button is-primary">
                    Register
                  </a>
                </Link>

                <Link href="/login">
                  <a href="/login" className="button is-light">
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
