import React from 'react';

export default function SmartWatchHero() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="absolute top-32 right-1/2 w-20 h-20 bg-pink-200 rounded-full opacity-50"></div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Let go of the Challenge<br />
                            See yourself better
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                            Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
                                How it works
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex gap-12 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">+12k</div>
                                    <div className="text-gray-600">Projects done</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">68k</div>
                                    <div className="text-gray-600">Custommers</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-200 rounded-full opacity-50 z-0"></div>
                        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-200 rounded-full opacity-50 z-0"></div>
                        <div className="absolute bottom-32 -right-8 w-28 h-28 bg-pink-200 rounded-full opacity-50 z-0"></div>

                        <div className="relative z-10 flex justify-center">
                            <div className="relative">
                                <img src="/public/soat.png" alt="Smart Watch" className="relative z-20" />
                            </div>
                        </div>

                        <div className="absolute top-0 left-0 flex justify-center mt-[-280px] ml-[-1900px] z-30">
                            <img src="/public/grafik.png" alt="Graphics" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}