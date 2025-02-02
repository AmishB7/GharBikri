import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bg-white">

            {/* main div */}
            <div className="mx-auto max-w-full px-4 lg:px-16 md:px-8 md:flex-row flex-col flex lg:flex-row flex-wrap lg:my-12 my-6 justify-normal">

                {/* left div */}
                <div className="lg:w-2/4 md:w-2/4 self-center">
                    <h1 className="text-6xl font-extrabold tracking- leading-none text-gray-900 lg:text-8xl sm:mb-5 lg:pr-20">Let&apos;s Find Your Comfort <span className="text-blue-500">House!</span></h1>
                </div>

                {/* right div */}
                <div className="flex flex-col lg:w-2/4 md:w-2/4 justify-start space-y-10">

                    {/* first component of right div */}
                    <div className="space-y-1">
                        <h2 className="capitalize text-gray-400 text-md lg:text-lg lg:my-2 my-5 mr-1">Find comfort in the house with us, want to find a home? we are ready to help you wholeheartedly based on what you need</h2>

                        <Link
                            to="/about"
                            type="button"
                            className="transition-all inline-flex justify-center w-fit border border-gray-300 shadow-sm px-4 py-3 text-md font-medium text-gray-50 hover:bg-gray-50 hover:text-gray-950  bg-blue-600 hover:font-bold"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >Read More &rarr;
                        </Link>
                    </div>

                    {/* second component of right div */}
                    <div className="flex items-center -space-x-2 overflow-hidden">
                        <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://randomuser.me/api/portraits/men/65.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                        <p className=" text-gray-500 text-md translate-x-5">
                            5.000+ people have found their home with us
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header;