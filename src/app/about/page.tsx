import SummaryBlock from '@/components/summary';

export default function Profile() {

 return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="py-8 xl:h-screen xl:py-0 bg-gray-800 flex flex-wrap items-center justify-center">
          <section className="flex justify-center">
            <div className="xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg transform duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden" >
                    <img className="w-full" src="/profile_bg.jpg" alt="" />
                </div>
                <div className="flex justify-center px-5 -mt-12">
                    <img className="w-32 bg-white p-2 rounded-full" 
                    src="/py.jpg" alt="" />

                </div>
                <div className=" ">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">PoYu (Gary) Chen</h2>
                        <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">
                          @PY(Gary)Chen
                        </a>
                        <p className="mt-2 text-gray-500 text-sm">
                        Engineering manager/Tech lead with 14 years of industry experience in front end and software development. 
                        Expert in mobile device industry, browser architecture, web standard APIs and web applications using modern HTML, CSS, and JavaScript.
                        I have embarked on a learning path in LLMs and AI programming since the year 2023.
                        </p>
                    </div>
                    <hr className="mt-6" />
                </div>
            </div>
          </section>
        </div>
        <div className="h-dvh bg-opacity-75">
          <div className="space-y-4">
            <SummaryBlock title='Skills'>
              <ul>
                <li>
                  Engineering manager/Tech lead with 14 years of industry experience in front end and software development.
                </li>
                <li>
                  Expert in mobile device industry, browser architecture, web standard APIs and web applications using modern HTML, CSS, and JavaScript.
                </li>
              </ul>
            </SummaryBlock>
            <SummaryBlock title='Education'>
              <ul>
                <li>
                  Master, Computer Science, National Taiwan Ocean University 2006 - 2008
                </li>
                <li>
                  Bachelor, Library & Science, Fu Jen Catholic University, 2002 - 2006
                </li>
              </ul>
            </SummaryBlock>
            <SummaryBlock title='Work experience'>
              <ul>
                <li>
                  KaiOS Technologies. June 2016 ~ present
                </li>
                <li>
                  Acadine Technologies, July 2015 ~ May 2016
                </li>
                <li>
                  Mozilla Taiwan, Jan 2012 ~ July 2015
                </li>
                <li>
                 Acer, Oct 2008 ~ Sep 2011
                </li>
                <li>
                 NTU Research Center for Digital Humanities, Oct 2008 ~ Sep 2011
                </li>
              </ul>
            </SummaryBlock>
            <SummaryBlock title='Key achievements'>
                <ul>
                  <li>KaiOS APP Store ecosystem, Todo, weather, New, QR code reader</li>
                  <li>KaiOS Ads platform</li>
                  <li>Voice assistant (intgegrate with openAI)</li>
                  <li>Payment service</li>
                  <li>Foxconn Firefox OS tablet</li>
                  <li>Panasonic Firefox OS smart TV</li>
                  <li>Mozilla Taiwan official websites</li>
                  <li>Firefox, Chrome web extendsions</li>
                </ul>
            </SummaryBlock>
            <SummaryBlock title='Contact'>
              <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                <li>
                  <a
                    href="https://www.linkedin.com/in/poyu-chen-gary/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span>Linkedin</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/mpizza"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </SummaryBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
