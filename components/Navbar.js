import Link from "next/link";
import { Router, useRouter } from "next/router";

function Navbar(props){
    const router = useRouter();

    return (
        <nav>
            <div>
                <Link href = '/'> 
                TransitRewards
                </Link>
                <Link href = '/'> 
                TransitRewards
                </Link>
            </div>
        </nav>
    );
}
