import { ExternalLink } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "Contribute", url: "/contributing", external: false },
  {
    name: "Changelog",
    url: "https://github.com/davidanukam/promptly/releases",
    external: true,
  },
  {
    name: "Sponsor",
    url: "https://www.linkedin.com/in/david-anukam",
    external: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/davidanukam/promptly",
    external: true,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/pQZ7turwT7",
    external: true,
  },
];

const Footer = () => {
  return (
    <footer className="h-(--footer-height) border-t border-secondary text-secondary-foreground">
      <div className="wrapper-lg py-8 grid gap-8 md:grid-cols-[1fr_auto]">
        <p>
          Released under the{" "}
          <Link
            href="https://github.com/davidanukam/promptly/LICENSE"
            className="text-primary-foreground font-semibold"
          >
            MIT License.
          </Link>
          <br />
          Copyright © 2025
        </p>
        <ul className="flex md:items-center gap-4 md:gap-8 flex-col md:flex-row flex-wrap">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.url}
                target={item.external ? "_blank" : "_self"}
                className="flex items-center gap-1 font-semibold"
              >
                {item.name}
                {item.external ? <ExternalLink size={14} /> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
