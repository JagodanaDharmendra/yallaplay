import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppIcon, Item } from "..";
import { MdMenu, MdClose } from "react-icons/md";

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
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else if (scrolled <= 10) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  });


  return (
    <div className="sticky top-0 z-50"
      style={{
        backdropFilter: visible && !isOpen ? "blur(35px)" : ""
      }}>

      <div className="relative px-8 py-8">
        {
          //Desktop
          <div className="items-center justify-between w-full hidden lg:flex lg:flex-row">
            <div className="max-w-xs max-h-20">
              <AppIcon />
            </div>
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
        }

        {
          // Mobile
          <div className="lg:hidden">
            <div className="items-center justify-between w-full flex flex-row">
              {!isOpen &&
                <>
                  <div className="max-w-xs max-h-20">
                    <AppIcon />
                  </div>
                  <div>
                    <button onClick={() => {
                      setIsOpen(true);
                    }}>
                      <MdMenu className="w-7 h-7" />
                    </button>
                  </div>
                </>
              }
            </div>
            {isOpen &&
              <div className="absolute top-0 left-0 bottom-0 right-0 h-screen w-screen flex flex-col px-8 py-8 z-50"
                style={{
                  backdropFilter: "blur(95px)"
                }}>
                {
                  <div className="flex justify-end items-center">
                    <button onClick={() => {
                      setIsOpen(false);
                    }}>
                      <MdClose className="w-7 h-7" />
                    </button>
                  </div>
                }
                <ul className="flex flex-col space-y-5">
                  {navMenus.map((value, index) => {
                    return (
                      <Item
                        key={`${value.label}`}
                        {...value}
                        active={activeMenu === value.href}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveMenu(value.href);
                        }}
                      />
                    );
                  })}
                </ul>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Navbar;
