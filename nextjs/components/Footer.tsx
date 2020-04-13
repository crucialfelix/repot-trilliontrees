import React from "react";
import Link from "next/link";

const FooterLogos = "";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="app-container__footerimage">
        <img className="footer-logo" src={FooterLogos} />
      </div>

      <div className="app-container__buttons">
        <Link href="/imprint">
          <a href="/imprint">Imprint</a>
        </Link>

        <span className="seprator">|</span>
        <Link href="/data-protection">
          <a href="/privacy">Privacy</a>
        </Link>

        <span className="seprator">|</span>

        <a
          className="pftp-button-transparent"
          href="mailto:support@trilliontreecampaign.org"
        >
          Contact
        </a>
        <span className="seprator">|</span>
        <Link href="/faq">
          <a href="/faq">FAQ</a>
        </Link>
      </div>
    </footer>
  );
}
