import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SettingsPage() {
  // ❌ Incorrect destructuring (bug)
  const [searchParams] = useSearchParams();

  const [count, setCount] = useState(0);
  const [user, setUser] = useState<any>(null);

  // ❌ Infinite re-render bug
  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  const username = searchParams.get("user");

  useEffect(() => {
    if (username) {
      fetch(`/api/user?name=${username}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, []); // should depend on username

  const upper = user.name.toUpperCase();

  return (
    <div>
      <h1>Settings Page</h1>
      <p>Count: {count}</p>
      <p>User: {upper}</p>
    </div>
  );
}
