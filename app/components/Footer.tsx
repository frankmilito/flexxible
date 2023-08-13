import Image from "next/image";
import React from "react";
import { footerLinks } from "../constants";
import Link from "next/link";

type FooterTypes = {
  links: Array<string>;
  title: string;
};
const FooterColumn = ({ links, title }: FooterTypes) => {
  return (
    <div className="footer_column ">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export const Footer = () => {
  return (
    <footer className="FlexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex item-start flex-col">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="flexxible"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-sm">
            Flexxible is the world leading communittee for developers to share,
            grow and get hired{" "}
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            links={footerLinks[0].links}
            title={footerLinks[0].title}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              links={footerLinks[1].links}
              title={footerLinks[1].title}
            />{" "}
            <FooterColumn
              links={footerLinks[2].links}
              title={footerLinks[2].title}
            />
          </div>
          <FooterColumn
            links={footerLinks[3].links}
            title={footerLinks[3].title}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              links={footerLinks[4].links}
              title={footerLinks[4].title}
            />{" "}
            <FooterColumn
              links={footerLinks[5].links}
              title={footerLinks[5].title}
            />
          </div>
          <FooterColumn
            links={footerLinks[6].links}
            title={footerLinks[6].title}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>&copy;2023 All rights reserved</p>
        <p className="text-gray">
          <span className="text-black">10,214</span> Projects Submitted
        </p>
      </div>
    </footer>
  );
};
