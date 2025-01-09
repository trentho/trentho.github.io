"use client";

import { useState, useEffect } from "react";

const NavBar = () => {
    const [showNav, setShowNav] = useState(true); // Start with the navbar visible
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    const handleScroll = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const offset = 36; // Leave 12px at the top
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // If scrolling down, hide the navbar. If scrolling up, show the navbar.
            if (window.scrollY > lastScrollY) {
                setShowNav(false); // Hide the navbar when scrolling down
            } else {
                setShowNav(true); // Show the navbar when scrolling up
            }

            // Update the last scroll position to the current scroll position
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]); // Re-run the effect when the scroll position changes

    return (
        <div>
            {/* Navbar */}
            <nav
                className={`z-50 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
                    showNav ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex flex-row justify-between p-4 text-[#354259]">
                    <div>
                        <h1
                            className="nav-item font-semibold hover:cursor-pointer"
                            onClick={() => handleScroll("#home")}
                        >
                            Trent Ho
                        </h1>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <h1
                            className="nav-item hover:cursor-pointer"
                            onClick={() => handleScroll("#projects")}
                        >
                            Projects
                        </h1>
                        <h1
                            className="nav-item hover:cursor-pointer"
                            onClick={() => handleScroll("#experience")}
                        >
                            Experience
                        </h1>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
