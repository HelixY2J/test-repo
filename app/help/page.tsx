import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function HelpPage() {
  const [searchParams] = useSearchParams();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const topic = searchParams.get("topic");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/help?topic=${topic}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      });
  }, []);

  const title = data.title.toUpperCase();

  function handleClick() {
    setLoading(true);
    setData(null);
  }

  return (
    <div>
      <h1>Help Page</h1>
      {loading && <p>Loading...</p>}
      <p>{title}</p>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}
