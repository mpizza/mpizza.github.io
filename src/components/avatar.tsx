type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
      <img src={(picture ?? '/py.jpg')} className="w-12 h-12 rounded-full m-2" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar;
