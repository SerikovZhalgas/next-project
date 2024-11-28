'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useSession, signIn, signOut} from "next-auth/react";

type NavLink = {
    label: string;
    href: string;
}

type NavigationProps = {
    navLinks: NavLink[];
}

export const Navigation = ({navLinks}: NavigationProps) => {
    const pathname = usePathname()
    const session = useSession();

    console.log(session)

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
            {session?.data && (
                <Link href={'/profile'}>Profile</Link>
            )}
            {session?.data ? <Link href={'#'} onClick={() => signOut({
                callbackUrl: '/'
            })}>SignOut</Link> : <Link href={'/signin'}>SignIn</Link> }
        </>
    )
}