"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Snowfall = dynamic(() => import("react-snowfall"), { ssr: false });

export default function SnowfallWrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <Snowfall
                color="#82C3D9"
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 50,
                    pointerEvents: 'none',
                    top: 0,
                    left: 0
                }}
            />
            {children}
        </>
    );
}
