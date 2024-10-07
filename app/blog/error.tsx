'use client';

export default function ErrorWrapper({error}: {error: Error}) {
    return <h1>Oooops!!! {error.message}</h1>
}