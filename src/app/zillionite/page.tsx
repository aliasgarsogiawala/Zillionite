import Image from "next/image";
import Link from "next/link";

export default function Zillionite(){
    return(
        <div className="flex flex-col min-h-screen bg-white py-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 flex flex-col md:flex-row items-center gap-8 bg-gray-50 py-12 rounded-lg">
                <div className="text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Lead To Last</h1>
                  <p className="text-lg text-gray-600">
                    Build Leadership Skills with Experiential Leadership<br />
                    Learn with Fun with experience and Impact
                  </p>
                  
                  <div className="pt-4">
                    <Link href="/leadtolast" className="inline-block px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition">
                      Lead
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src="/leadtolast.png" alt="Zillionite Preview" width={400} height={70} className="rounded-lg shadow-lg" />
                </div>
            </div>
            
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 flex flex-col md:flex-row items-center gap-8 bg-gray-50 py-12 rounded-lg">
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src="/ztz.jpg" alt="Zillionite Preview" width={400} height={70} className="rounded-lg shadow-lg" />
                </div>
                
                <div className="text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Connect With Us</h1>
                  <div className="grid grid-cols-1 gap-3 bg-white p-5 rounded-lg shadow-sm">
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">For cool careers</p>
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">To unlock growth</p>
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">Lean in business collaborations</p>
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">To go places with Key Note Speaker Shweta</p>
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">For Leading with Zillionite</p>
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">If you want Organisation Development</p>
                    <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">So Immersive Learning takes place</p>
                  </div>
                  
                  <div className="pt-4">
                    <Link href="/connect" className="inline-block px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition">
                      Lead
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    );
}