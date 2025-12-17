import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  role: string;
  image: string;
  expertise: string[];
  description: string;
}

export interface BoardPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  views: number;
  content: string;
  image?: string;
}