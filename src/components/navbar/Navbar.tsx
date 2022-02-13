import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppIcon, Item } from "..";

const navMenus = [
  {
    label: "Home",
    href: "",
  },
  {
    label: "About us",
    href: "#about-us",
  },
  {
    label: "Our games",
    href: "#our-games",
  },
  {
    label: "Our Services",
    href: "#our-services",
  },
  {
    label: "Founders",
    href: "#founders",
  },
  {
    label: "Investors",
    href: "#investors",
  },
  {
    label: "Contact us",
    href: "#contact-us",
  },
  {
    label: "Jobs",
    href: "https://yallaplay.breezy.hr",
  },
];

function Navbar() {
  const location = useLocation();
  const hash = location ? location.hash : "";
  const [activeMenu, setActiveMenu] = useState<string>(hash);

  useEffect(() => {
    if (hash) {
      var element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
    setActiveMenu(hash);
  }, [hash]);

  return (
    <div className="flex items-center justify-between w-full py-8">
      <div className="max-w-xs max-h-20">
        <AppIcon />
      </div>
      <div className="flex flex-row">
        <ul className="flex flex-row">
          {navMenus.map((value, index) => {
            return (
              <Item
                key={`${value.label}`}
                {...value}
                active={activeMenu === value.href}
                onClick={() => {
                  setActiveMenu(value.href);
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
