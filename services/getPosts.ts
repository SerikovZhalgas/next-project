export async function getAllPosts() {
    const response = await fetch("/api/posts", {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) throw new Error('Unable to fetch posts!');

    return response.json();
}

export async function getPostsBySearch(search: string) {
    const response = await fetch(`/api/posts?q=${search}`);

    if (!response.ok) throw new Error('Unable to fetch posts!');

    return response.json();
}