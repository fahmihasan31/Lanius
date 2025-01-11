import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import notfound from "@/app/images/notfound.png"

const Page = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <main className="bg-gray-100 mb-32 mt-32">
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                    <div className="mx-auto rounded-full flex items-center justify-center">
                        <Image 
                            src={notfound}
                            width={500}
                            height={500}
                            alt="Picture of status not found"
                        />
                    </div>

                    <h2 className="text-gray-700 text-xl font-mono">
                        Maaf ... Sepertinya Halaman Yang Anda Cari Sedang Dalam Perbaikan.
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Mari Kembali Ke Halaman Utama
                    </p>

                    <a
                        href="/"
                        className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition duration-200 inline-block mt-4"
                    >
                        Back to Home
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Page;