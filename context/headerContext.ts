'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type HeaderOption = 'home' | 'about' | 'projects' | 'resume' | 'contact';

interface HeaderContextType {
    selected: HeaderOption;
    setSelected: (option: HeaderOption) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

const pathToOption = (pathname: string): HeaderOption => {
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/projects')) return 'projects';
    if (pathname.startsWith('/resume')) return 'resume';
    if (pathname.startsWith('/contact')) return 'contact';
    return 'home';
};

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const [selected, setSelected] = useState<HeaderOption>(pathToOption(pathname));

    useEffect(() => {
        setSelected(pathToOption(pathname));
    }, [pathname]);

    return React.createElement(
        HeaderContext.Provider,
        { value: { selected, setSelected } },
        children
    );
};

export const useHeaderContext = () => {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error('useHeaderContext must be used within a HeaderProvider');
    }
    return context;
};
