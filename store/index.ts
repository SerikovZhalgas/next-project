import {create} from "zustand/react";
import {getAllPosts, getPostsBySearch} from "@/services/getPosts";

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (search: string) => Promise<void>;
}

export const usePosts = create<UsePosts>()((set) => ({
    posts: [],
    loading: false,
    getAllPosts: async () => {
        set({loading: true});
        const posts = await getAllPosts();
        set({posts, loading: false});
    },
    getPostsBySearch: async (search: string) => {
        set({loading: true});
        const posts = await getPostsBySearch(search);
        set({posts, loading: false});
    },
}))