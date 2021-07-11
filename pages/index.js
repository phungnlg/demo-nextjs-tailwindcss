export default function HomePage() {
  return (
    <>
      <section className="relative flex items-center pt-24 pb-8 bg-green-700 header">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 text-white sm:pt-0">
              <h2 className="text-4xl font-semibold">
                Next JS - Tailwind CSS
              </h2>
              <h4 className="mt-2 text-2xl font-bold leading-relaxed text-gray-300">
                Create a Next.js app
              </h4>
              <pre>{`
npx create-next-app
# or
yarn create next-app
              `}</pre>

              <h4 className="mt-2 text-2xl font-bold leading-relaxed text-gray-300">
                Install libs
              </h4>
              <pre>{`
yarn add -D sass tailwindcss postcss autoprefixer
              `}</pre>

            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center pt-6 pb-16">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h4 className="mt-4 text-2xl font-bold leading-relaxed text-gray-900">
                Folder structure
              </h4>

                <ul className="tree">

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 assets</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📁 styles</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                          <li id="menu14">
                            <a>
                              <label htmlFor="menu14">📝 globals.scss</label>
                              <input defaultChecked id="menu14" value="" type="checkbox" />
                            </a>
                          </li>
                          <li id="menu14">
                            <a>
                              <label htmlFor="menu14">📝 tailwind.css</label>
                              <input defaultChecked id="menu14" value="" type="checkbox" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>images</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 components</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📁 common</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📁 partials</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 layouts</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 default.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 error.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 pages</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 _app.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 _document.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 _error.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 404.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                      <li id="menu13">
                        <label htmlFor="menu13"><a>📝 index.js</a></label>
                        <input defaultChecked id="menu13" value="" type="checkbox" />
                        <ul>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📁 public</a>
                    </label>
                    <input defaultChecked id="menu12" value="" type="checkbox" />
                    <ul>
                    </ul>
                  </li>

                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 .env</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 .env.development</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 .env.production</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 jsconfig.js</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 next.config.js</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 postcss.config.js</a>
                    </label>
                  </li>
                  <li id="menu12">
                    <label htmlFor="menu12">
                      <a>📝 tailwind.config.js</a>
                    </label>
                  </li>

                </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
