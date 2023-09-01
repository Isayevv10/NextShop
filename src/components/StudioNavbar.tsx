import { colors } from "@src/app/theme";
import { link } from "fs";
import Link from "next/link";
import React, { CSSProperties } from "react";
import { NavbarProps } from "sanity";

const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: colors.brand.primary,
};

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div
        style={{
          padding: "0.6rem 2rem",
          display: "flex",
          gap: "2rem",
        }}
      >
        <Link href="/" style={linkStyle}>
          Back Home
        </Link>
        <Link href="/products" style={linkStyle}>
          View Products
        </Link>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
