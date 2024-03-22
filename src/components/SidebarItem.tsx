'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarItem {
    icon: React.ReactNode;
    label: string;
    path: string;
}

export const SidebarItemComponent = ({ icon, label, path }: SidebarItem) => {

    const currentPath = usePathname();


    return (
        <li>
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            <Link
                href={path}
                className={
                    `
                    px-4 py-3 flex items-center space-x-4 rounded-md group
                    hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
                    ${currentPath == path ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
                    `
                }>
                {icon}
                <span className="-mr-1 font-medium">
                    {label}
                </span>
            </Link>
        </li>
    );
}