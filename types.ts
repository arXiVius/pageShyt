
export interface Project {
  id: string;
  name: string;
  description: string;
  href: string;
  active?: boolean; 
  status?: 'LIVE' | 'WIP' | 'RIP' | 'COOKING';
}

export interface InkBlot {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}
