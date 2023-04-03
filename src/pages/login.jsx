import Loading from "@/comp/Layout"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function Component() {
  const { data: session } = useSession()
  
  if (session) {
    console.log(session)
    return (
      <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
     
        <div style={{margin:"10px"}}>
          <img src={session.user.image} alt="" />
        </div>
       <h3> Signed in as {session.user.email}</h3> <br />
       <h1>{session.user.name}</h1> 
        <button style={{padding:".6rem" , fontSize:"1.2rem"}} onClick={() => signOut()}>Sign out</button>
        <Link href={`/account`}><button style={{padding:".6rem" , fontSize:"1.2rem"}}> account page</button></Link>
      </div>
    )
  }
  return (
    <div style={{display:"flex", flexDirection:"column",padding:"10rem 0", justifyContent:"center" , alignItems:"center"}}>
    <h1>Login First  </h1><br />
      <br />
      <button style={{padding:".6rem" , fontSize:"1.2rem"}} onClick={() => signIn()}>Sign in</button>
      <br />
 
      <Link href={`/`}><button style={{padding:".6rem" , fontSize:"1.2rem" ,margin:"5px"}}> Go To Home</button></Link>
    
    </div>
  )
}