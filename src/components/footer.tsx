{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-8  pt-1 md:grid-cols-4 lg:grid-cols-6"
        >
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Me</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="/profile"> Profile </a>
              </li>
            </ul>
          </div>
        
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Site Map</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="/blog"> Blog </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Side Projects</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="https://www.youtube.com/@goddamnedgame">
                  尬電玩 Youtube 頻道
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="https://chromewebstore.google.com/detail/op-downloader/gpgdgecijngkecfccmpajadipieldapd?hl=zh-TW&authuser=0">
                  OP Downloader
                </a>
              </li>

              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="https://addons.mozilla.org/mk/firefox/addon/yuman/"> 
                  Yuman
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Copyright &copy; 2024. All rights reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <a
                href="https://www.linkedin.com/in/poyu-chen-gary/"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Linkedin</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 425 512" >
                  <path d="M317 51q21.5 0 40.5 8.25t33.25 22.5 22.5 33.25 8.25 40.5v209q0 21.5-8.25 40.75t-22.5 33.5-33.25 22.5-40.5 8.25H107.5q-21.5 0-40.5-8.25t-33.25-22.5-22.5-33.5T3 364.5v-209Q3 134 11.25 115t22.5-33.25T67 59.25 107.5 51H317zM147 208H94.5v170H147V208zm-26-13.5q10.5 0 18.25-7.5t7.75-18.5-7.75-18.5-18.25-7.5q-11 0-18.75 7.5t-7.75 18.5 7.75 18.5 18.75 7.5zm209 85q0-18-10-35.25T294 218q-14.5-8-33.75-8.5T225.5 216v-8H173v170h52.5V274l21.5-10.5q4-2 11-2t10.5 2.5q3 1.5 6 6.5t3 9V378H330v-98.5z"/>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mpizza"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" >
                  <path d="m400 32h-352c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48zm-122.7 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;