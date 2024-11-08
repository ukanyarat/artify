import React from 'react';
import { FaHome, FaUser, FaBell, FaSearch, FaCoins } from 'react-icons/fa';
import * as Tabs from '@radix-ui/react-tabs';

const Artify = () => {
    return (
        <div>
            {/* Top bar */}
            <div className="flex justify-between items-center p-3 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
                {/* Search bar */}
                <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
                    <FaSearch className="w-5 h-5 text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                    />
                </div>

                {/* Icon section */}
                <div className="flex items-center space-x-5">
                    <FaHome className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                    <FaBell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                    <FaUser className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />

                    {/* Coin and counter */}
                    <div className="flex items-center space-x-1">
                        <FaCoins className="w-6 h-6 text-yellow-500" />
                        <span className="text-gray-700 font-semibold">3,501</span>
                    </div>
                </div>
            </div>

            {/* Tabs section */}
            <div className="flex justify-center items-center min-h-screen pt-20">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
                    <Tabs.Root defaultValue="Artist" className="w-full">
                        <Tabs.List className="flex justify-center gap-6 mb-6 border-b border-gray-300 pb-2">
                            <Tabs.Trigger
                                value="Artist"
                                className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 flex-1 text-center"
                            >
                                Artist
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                value="Media"
                                className="text-lg font-semibold text-gray-500 hover:text-indigo-700 flex-1 text-center"
                            >
                                Media
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                value="Products"
                                className="text-lg font-semibold text-gray-500 hover:text-indigo-700 flex-1 text-center"
                            >
                                Products
                            </Tabs.Trigger>
                        </Tabs.List>

                        {/* Content */}
                        <Tabs.Content value="Artist" className="mt-4 text-center text-gray-600 w-full">
                            <div>โดเนท</div>
                            <div>TATTOO COLOUR</div>
                            <div className="flex justify-between">
                                <div>เนื้อเรื่องซ้าย</div>
                                <div>เนื้อเรื่องขวา</div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="Media" className="mt-4 text-center text-gray-600 w-full">
                            <p>โซเชี่ยวมีเดีย</p>
                            <div className="max-w-xs">
                                <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
                                    <div className="relative pb-9/16">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                                            title="YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-50"
                                        ></iframe>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-lg font-semibold">แล้วแต่แม่คุณ</p>
                                        <p className="text-sm text-gray-600">
                                        TATTOO COLOUR - แล้วแต่แม่คุณ | My Lady feat. TangBadVoice [Music Video]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="Products" className="mt-4 text-center text-gray-600 w-full">
                            <p>รายการสินค้า</p>

                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
        </div>
    );
};

export default Artify;
