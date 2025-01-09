"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

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
            if (window.scrollY > 50) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav
                className={`z-50 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
                    showNav ? "translate-y-0 backdrop-blur-xl bg-white/60" : "-translate-y-full"
                }`}
            >
                <div className="flex flex-row justify-between p-4 text-[#354259]">
                    <div>
                        <h1
                            className="nav-item font-semibold hover:cursor-pointer"
                            onClick={() => handleScroll("#home")}
                        >
                            sarah dickerson
                        </h1>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <h1
                            className="nav-item hover:cursor-pointer"
                            onClick={() => handleScroll("#projects")}
                        >
                            projects
                        </h1>
                        <h1
                            className="nav-item hover:cursor-pointer"
                            onClick={() => handleScroll("#experience")}
                        >
                            experience
                        </h1>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;