export interface BannerDataProps {
  _id: string;
  sliderimage: string;
  alttext: string;
}

export interface NavbarItemProps {
  name: string;
  href: string;
}

export interface ProductProps {
  _id: string;
  title: string;
  content: string;
  category: {
    _id: string;
    title: string;
  };
  productimage: string;
}

export type CategoryProps = {
  _id: string;
  gearcategorytitle: string;
};

export interface GearProps {
  _id: string;
  geartitle: string;
  gearcategory: {
    _id: string;
    gearcategorytitle: string;
  };
}

export type AboutProps = {
  _id: string;
  content1: string;
  content2: string;
};

export type MobileMenuProps = {
  visible?: boolean;
};

export type MobileState = {
  showMobile: boolean;
};

export interface ContactPayloadProps {
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}

export type FooterProps = {
  _id: string;
  about: string;
  location: string;
};


export interface GearDataProps {
  _id: string;
  geartitle: string;
  gearcategory: {
    _id: string;
    gearcategorytitle: string;
  };
};
