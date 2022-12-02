import Link from "next/link"
import { Router, useRouter } from "next/router";

export const NavBar = () => {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>about</Link>
        </nav>
    )
}