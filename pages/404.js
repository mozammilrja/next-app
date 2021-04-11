import Link from 'next/link'

import {useRouter} from 'next/router'
import {useEffect} from 'react'

const NotFoundPage = () => {
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() =>{
            router.push("/")
        },1000)
    },[])

    return (
        <div className="not-found">
            <h1>Ops...</h1>
            <h1>The page cannot be found</h1>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFoundPage
