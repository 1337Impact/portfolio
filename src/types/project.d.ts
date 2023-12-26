export interface ProjectCardProps {
    title: string;
    date: string;
    image?: string;
    link: string;
    tech?: string[];
    demo: string;
    placeholderImg?: string;
    isVideo: boolean;
    h: string;
    children: React.ReactNode;
}
export interface ProjectsData {
    title: string;
    date: string;
    image?: string;
    link: string;
    tech?: string[];
    demo: string;
    isVideo: boolean;
    h: string;
    children: React.ReactNode;
}