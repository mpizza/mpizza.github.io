type PorductProps = {
  title: string;
  description: string;
  url: string;
  details: {
    [name: string]: number;
  },
  keywords: string[];
  images: string[];
  price: number;
}


export default PorductProps;