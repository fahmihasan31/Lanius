import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                    {/* Teks HI-FI di sebelah kiri */}
                    <div className="text-2xl font-bold text-gray-700 ml-4">HI-FI</div>

                    {/* Navigasi di tengah */}
                    <nav className="flex-1 mx-4 text-center">
                        <a href="#home" className="mx-4 text-gray-600 hover:text-blue-500">Home</a>
                        <a href="#shop" className="mx-4 text-gray-600 hover:text-blue-500">Shop</a>
                        <a href="#event" className="mx-4 text-gray-600 hover:text-blue-500">Event</a>
                    </nav>

                    {/* Tombol Join Now di sebelah kanan */}
                    <a 
                        href="#join" 
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mr-4"
                    >
                        Join Now
                    </a>
                </div>
            </header>
            
            {/* Content Section */}
            <section className="bg-gray-100 py-12 flex-grow mt-28">
              <div className="container mx-auto text-center">
              <h1 className="text-6xl font-bold mt-2 text-gray-950 font-mono">Jelajahi Tingkat</h1>
              <h2 className="text-6xl font-bold mt-4 text-gray-950 font-mono">Kesehatan Anda</h2>

                <div className="flex justify-center space-x-4 mt-8">
                  {/* Button 1: Lanjutkan */}
                  <a
                    href="#"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-200"
                  >
                    Lanjutkan
                  </a>
                  
                  {/* Button 2: Jelajahi */}
                  <a
                    href="#"
                    className="bg-white text-black border border-black px-6 py-2 rounded-md hover:bg-gray-100 transition duration-200"
                  >
                    Jelajahi
                  </a>
                </div>
              </div>
            </section>

            <section className='mt-40'>
            <div className="bg-gray-200 py-8">
              <div className="flex items-center justify-center space-x-8">
                <span className="text-gray-900 text-2xl font-mono font-bold">Hidup Sehat</span>
                <span className="text-gray-900">*</span>
                <span className="text-gray-900 text-2xl font-mono font-bold">Marketplace</span>
                <span className="text-gray-900">*</span>
                <span className="text-gray-900 text-2xl font-mono font-bold">Mitigasi Resiko</span>
              </div>
            </div>
            </section>

            <section className='mt-24'>
            <div className="flex justify-center items-start py-8 px-4">
                {/* Image Section */}
                <div className="w-1/3 flex justify-center items-center">
                  <div className="w-48 h-64 border border-gray-400">
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="w-2/3 pl-8">
                  <h2 className="text-5xl font-semibold mb-4 text-gray-900 font-mono">
                    Kenapa harus <span className="font-bold ">hidup sehat?</span>
                  </h2>
                  <p className="text-gray-600 mb-6 font-mono">
                    Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat 
                    etiam nisl tincidunt a porttitor diam. Velit ut senectus tellus ipsum nam.
                  </p>
                  <ul className="text-gray-600 space-y-4 font-mono">
                    <li>01 Lorem ipsum dolor sit amet consectetur. Vitae nibh at pellentesque lorem.</li>
                    <li>02 Lorem ipsum dolor sit amet consectetur. Vitae nibh at pellentesque lorem.</li>
                    <li>03 Lorem ipsum dolor sit amet consectetur. Vitae nibh at pellentesque lorem.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className='mt-24'>
            <div className="flex flex-col items-center py-8">
                {/* Title */}
                <h2 className="text-5xl font-mono font-bold mb-6 text-gray-900">Program Kami</h2>

                {/* Boxes */}
                <div className="flex space-x-12 mt-16">
                  <div className="w-48 h-64 border border-gray-400"> </div>
                  <div className="w-48 h-64 border border-gray-400"> </div>
                  <div className="w-48 h-64 border border-gray-400"> </div>
                </div>
              </div>
            </section>

            <footer className='mt-24'>
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Text 1 */}
              <div className="text-block p-4 ml-16">
                <p className="text-gray-700 text-s mb-2 font-mono">
                  Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat
                  etiam nisl tincidunt a porttitor diam. Velit et senectus tellus
                  ipsum nam.
                </p>
              </div>

              {/* Text 2 */}
              <div className="text-block p-4 ml-4">
                <p className="text-gray-700 text-s mb-2 font-mono">
                  Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat
                  etiam nisl tincidunt a porttitor diam. Velit et senectus tellus
                  ipsum nam.
                </p>
              </div>

              {/* Form */}
              <div className="form-container p-5">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 font-mono">Contact Us</h2>
                <form className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="p-3 border border-gray-900 w-48"
                  />
                  <button
                    type="submit"
                    className="bg-white border border-black text-black font-bold py-3 px-4 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </footer>
        </div>
    );
};

export default Home;