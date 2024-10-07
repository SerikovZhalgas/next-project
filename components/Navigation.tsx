'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
    label: string;
    href: string;
}

type NavigationProps = {
    navLinks: NavLink[];
}

export const Navigation = ({navLinks}: NavigationProps) => {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActive ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </>
    )
}