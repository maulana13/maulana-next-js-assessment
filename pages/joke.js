import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function JokePage() {
  const [joke, setJoke] = useState(null);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setTime(new Date());
	  }, 1000);
	  return () => clearInterval(interval);
	}, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-3">
      <nav>
        <Link href="/" className="text-2xl text-blue-600 underline hover:text-blue-800">Back</Link>
      </nav>
	
	  <p className="text-sm text-gray-500 text-right">Time: {time.toLocaleTimeString()}</p>
	  
      <h5 className="text-3xl font-bold text-center text-gray-800">Random Joke</h5>
      {joke ? (
        <div>
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p className="font-semibold text-green-700 transition duration-300 hover:text-green-900"><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      ) : (
        <p className="animate-pulse text-gray-500 text-center">Loading joke...</p>
      )}
	  
		<button
		  onClick={() => {
			setJoke(null); // Kosongkan dulu agar "Loading joke..." tampil lagi
			fetch('https://official-joke-api.appspot.com/random_joke')
			  .then((res) => res.json())
			  .then((data) => setJoke(data));
		  }}
		  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
		>
		Replace Joke
		</button>
    </div>
  );
}
