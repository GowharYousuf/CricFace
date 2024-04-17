import React from 'react'

const Ratings = () => {
    return (
        <div>
            <div className="mt-0">
                <div className="mb-16 text-center">
                    <h2 className="md:text-4xl text-3xl text-white font-extrabold">What our happy cricketers say</h2>
                </div>
                <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
                    <div className="bg-blue-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"></div>
                    <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                        <div>
                            <img src="https://readymadeui.com/profile_2.webp" className="w-12 h-12 rounded-full" alt="profile" />
                            <h4 className="whitespace-nowrap font-extrabold mt-2">Virat Kohli</h4>
                            <p className="mt-1 text-xs">Indian Cricket Team Captain</p>
                        </div>
                        <div className="mt-4">
                            <p>These cricket bats are top-notch! They provide excellent balance and power, allowing me to hit those big shots with ease. Highly recommended for any serious cricketer.</p>
                        </div>
                    </div>
                    <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                        <div>
                            <img src="https://readymadeui.com/profile_3.webp" className="w-12 h-12 rounded-full" alt="profile" />
                            <h4 className="whitespace-nowrap font-extrabold mt-2">Babar Azam</h4>
                            <p className="mt-1 text-xs">Pakistani Cricket Team Captain</p>
                        </div>
                        <div className="mt-4">
                            <p>I've tried various cricket bats, but these are truly exceptional. The craftsmanship and attention to detail are outstanding, providing me with the confidence to perform at my best.</p>
                        </div>
                    </div>
                    <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                        <div>
                            <img src="https://readymadeui.com/profile_4.webp" className="w-12 h-12 rounded-full" alt="profile" />
                            <h4 className="whitespace-nowrap font-extrabold mt-2">Joe Root</h4>
                            <p className="mt-1 text-xs">English Cricket Team Captain</p>
                        </div>
                        <div className="mt-4">
                            <p>These cricket bats have become my go-to choice. They offer exceptional performance and durability, allowing me to focus on my game without worrying about equipment failure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ratings
