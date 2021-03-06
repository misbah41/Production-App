import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <h4>E-Shoper</h4>
        </a>
      </Link>
      <ul>
        <li>Address: 60-49 Road 11378 New York</li>
        <li>Phone: +65 11.188.888</li>
        <li>Email: info.E-shoper@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
