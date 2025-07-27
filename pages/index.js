import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-3">
      <nav>
        <Link href="/joke" className="text-2xl text-blue-600 underline hover:text-blue-800">Joke</Link>
      </nav>

      <h4 className="text-3xl font-bold text-center text-gray-800">Halo, saya Maulana Septiyadi.</h4>
      <p className="text-justify mt-3">
        Saya berharap dapat terus berkembang dalam berkarier di TMA, baik dari sisi Teknis maupun kepemipinan. 
		Setelah menangani project Big Data Analytic saya berharap dapat terus meningkatkan keahlian saya dengan 
		teknologi-teknologi terbaru yang berkaitan dengan Big Data Analytic.
      </p>
    </div>
  );
}
