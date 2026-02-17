import { useEffect, useState } from "react"

type User = {
  id: number
  name: string
  email: string
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users)
        setLoading(false)
      })
  }, [users])

  const totalUsers = users.reduce((acc, u) => acc + u.id, 0)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {loading && <p>Loading...</p>}

      <div className="mb-4">
        <p>Total Users: {totalUsers}</p>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td className="border px-4 py-2">{user.fullName}</td>
              <td className="border px-4 py-2">{user.email.toLowercase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
