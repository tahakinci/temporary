export type Coords = {
  x: number;
  y: number;
};

export type Holes = {
  name: string;
  position: {
    x: number;
    y: number;
  };
  radius: number;
};

export type Part = {
  id: number;
  name: string;
  thickness: number;
  width: number;
  weight: number;
  coords: Coords[];
  holes: Holes[];
  selected: boolean;
};

export type Profile = {
  id: number;
  name: string;
  parts: Part[];
};

export type Material = {
  coilNumber: number;
  stripeWidth: number;
  thickness: number;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  dt: number;
  material: Material;
  profile: Profile;
};

export type Data = {
  projects: Project[];
};
