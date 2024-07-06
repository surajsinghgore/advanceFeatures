'use client'
import { useRouter } from 'next/navigation';

const page = () => {
 
    const { push } = useRouter();

    const logout = async() => {
     await fetch('/api/logout',{
        method:"POST",
        body:JSON.stringify({})
    })
    push("/auth/login");
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, admin!</p>
      <button onClick={() => logout()}>Logout</button>
    </div>

  )
}

export default page
