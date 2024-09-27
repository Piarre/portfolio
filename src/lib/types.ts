interface IData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary?: string;
  avatarUrl: string;
  skills: string[];
  navbar: TNavbar[];
  contact: TContact;
  work: TWork[];
  education: TEducation[];
  projects: TProject[];
}

type TNavbar = { href: string; icon: any; label: string };

type TContact = {
  email: string;
  social: {
    [x: string]: {
      name: string;
      url: string;
      icon: (x: any) => JSX.Element;
      navbar: boolean;
    };
  };
};

type TWork = {
  company: string;
  href: string;
  badges: any[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

type TEducation = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string | `${number}` | number;
  end: string | `${number}` | number;
};

type TBaseProject = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: any }[];
};

type ProjectWithImage = TBaseProject & { image: string; video?: never };
type ProjectWithVideo = TBaseProject & { video: string; image?: never };

type TProject = ProjectWithImage | ProjectWithVideo;

// Je veux qu'on puisse seulement mettre imagef ou vidfeo

export {
  type IData,
  type TNavbar,
  type TContact,
  type TWork,
  type TEducation,
  type TBaseProject,
  type TProject,
};
