import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logos.png" width={120} height={70} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/rajas/"><a>Service</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
);
}
 
export default Navbar;