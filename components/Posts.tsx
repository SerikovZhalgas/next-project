'use client';
import Link from "next/link";
import useSWR from "swr";
import {getAllPosts} from "@/services/getPosts";
// import {usePosts} from "@/store";
// import {useEffect} from "react";
// import {useShallow} from "zustand/react/shallow";

export const Posts = () => {
    const {data: posts, isLoading} = useSWR('posts', getAllPosts)
    // const [posts, loading, getAllPosts] = usePosts(
    //      useShallow(state => [state.posts, state.loading, state.getAllPosts])
    // );
    //
    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts]);

    return isLoading
        ? <h3>Loading...</h3>
        : (
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        )
}