import Porduct from '@/types/product';

const PorductBlock = (props: Porduct) => {
  const {url, name, price, images} = props;
  const image = images[0];
  return (
    <a href={url} className="group block border-sky-600 border-2 rounded-lg hover:border-sky-400" target='_blank'>
    <img
      src={image}
      alt={`${image} picture`}
      className="h-[350px] w-full object-cover sm:h-[450px]"
    />
  
    <div className="m-4">  
      <div className="mt-3 justify-between text-sm">
        <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>
  
        <p className="text-red-600">{price} 元</p>
      </div>
    </div>
  </a>
  )
}

export default PorductBlock;