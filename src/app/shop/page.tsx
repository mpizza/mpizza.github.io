import { promises as fs } from 'fs';
import PorductBlock from "@/components/product-block";
import PorductProps from '@/types/product';

const getProducts = async () => {
  const file = await fs.readFile(process.cwd() + '/public/products.json', 'utf8');
  const data = JSON.parse(file);

  return data;
}
export default async function Shop() {
  const items = await getProducts();
  return (
    <div className="w-full my-6">
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {
          items.map( (item: PorductProps, index: number) => 
            <PorductBlock key={index} {...item}/>
          )
        }
      </section>
    </div>
  );
}
