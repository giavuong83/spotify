"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import ItemAlbum from "../ItemAlbum/ItemAlbum";
import Footer from "../Footer/Footer";
import api from "@/lib/api";

interface ListAlbumProps {
    id?: string;
}

interface Album {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
}

const ListAlbum: React.FC<ListAlbumProps> = ({ id = 0 }) => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await api.get('/albums');
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <div className="h-full rounded-md bg-(--main-color)">
            <ScrollArea className="h-[calc(100vh-70px)] px-3">
                <div className="my-5 mb-10 overflow-hidden">
                    <div className="mb-9 flex items-end justify-between px-3 pt-13 font-bold">
                        <p className="text-3xl">Trending songs {id}</p>
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="grid grid-cols-5 gap-y-6">
                            {albums.map((album) => (
                                <ItemAlbum
                                    key={album.id}
                                    title={album.title}
                                    artist={album.artist}
                                    imageUrl={album.imageUrl}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <Footer />
            </ScrollArea>
        </div>
    );
};

export default ListAlbum;
