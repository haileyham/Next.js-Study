import Link from "next/link";

export default function Home() {
    let name = 'hailey';
    let link = "https://www.google.com"
    return (
        <div>
            <nav className="navbar">
                <Link href="/">홈</Link>
                <Link href="/list">List</Link>
                {/* Link : a태그와 같은데 조금 더 부드럽게 전환 */}
                {/* 이동할 경로 적어줌 */}
            </nav>
            <a href={link} style={{ color: "#fff", fontSize: "30px" }}>
                <h1 className="title">Market</h1>
            </a >
            <p className="title-sub">{name}</p>
        </div >
    )
}
