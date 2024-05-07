export default function Home() {

  return (
    <div className="w-full">
      <section className="overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:lg:text-left rtl:lg:text-right">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent lg:text-5xl">
              PoYu Chen 
            </h1>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              玩科技、買玩具、寫程式、看棒球
            </p>

            <div className="mt-4 md:mt-8 hidden">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
               聯絡我
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src="main-2.jpeg"
          className="h-full w-full object-cover lg:h-[calc(100%_-_2rem)] lg:self-end lg:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

    </div>
  );
}
