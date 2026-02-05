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
}

export interface GearProps {
  _id: string;
  geartitle: string;
  gearcategory: {
    _id: string;
    gearcategorytitle: string;
  };
}
