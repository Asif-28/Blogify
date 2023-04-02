import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    console.log(session)
    return (
      <div >
        <div>

      <img src={session.user.image} alt="" />
        </div>
        Signed in as {session.user.email} <br />
        {session.user.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      Not signed in <br />
      <br />
      <button onClick={() => signIn()}>Sign in</button>
      <br />
 
      <Link href={`/`}>Home</Link>
    </div>
  )
}