'use client'

import {GoogleButton} from "@/components/GoogleButton";
import {SignInForm} from "@/components/SignInForm";

export default async function SingIn() {
    return (
        <div className="stack">
            <h1>SignIn</h1>
            <GoogleButton/>
            <div>or</div>
            <SignInForm />
        </div>
    )
}