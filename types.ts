export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  longDescription?: string;
}

export interface CareerItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
}