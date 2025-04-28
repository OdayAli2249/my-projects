import { ReactNode } from "react";

export type ActionType = 'LINK' | 'DEFAULT';

export type ProjectOption = { icon: string; label: string, actionType: ActionType, link?: string };

export interface Project {
    id: number;
    identifier: string;
    type: 'video' | 'image';
    name: string;
    logoUrl: string;
    hyperWords?: Map<string, string>;
    description: string;
    mediaUrl: string;
    mediaViewer: any;
    tags: number[];
    gallery?: any[];
    linksTitle?: string;
    links?: any[];
    aboutTitle?: string;
    aboutItems?: any[];
    options: ProjectOption[];
    customComponent?: ReactNode;
}


export interface ProjectHeaderProps {
    projectName: string;
    logoUrl: string;
    subtitle: string;
}

export interface ProjectCardProps {
    defaultAction: () => void;
    project: Project;
}

export interface ProjectCardOptionProps {
    defaultAction: () => void;
    option: ProjectOption;
}

export interface ProjectsGalleryProps {
    children: React.ReactNode;
}