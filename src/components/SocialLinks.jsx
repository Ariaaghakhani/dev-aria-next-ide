import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { siteConfig } from "@/config/site";

function SocialLinks({ className = "" }) {
    const socialLinks = [
        {
            href: siteConfig.social.github,
            icon: faGithub,
            label: "GitHub Profile"
        },
        {
            href: siteConfig.social.instagram,
            icon: faInstagram,
            label: "Instagram Profile"
        },
        {
            href: siteConfig.social.linkedin,
            icon: faLinkedinIn,
            label: "LinkedIn Profile"
        },
        {
            href: siteConfig.social.whatsapp,
            icon: faWhatsapp,
            label: "WhatsApp Contact"
        },
        {
            href: siteConfig.social.email,
            icon: faEnvelope,
            label: "Email Contact"
        }
    ];

    return (
        <ul className={`flex items-center *:me-4 ${className}`}>
            {socialLinks.map((social, index) => (
                <li key={index} className="menu-hovered">
                    <Link
                        href={social.href}
                        className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]"
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={social.icon}
                            className="text-gry max-w-[16px] max-h-[16px]"
                            aria-hidden="true"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;
