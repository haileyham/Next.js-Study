import Link from "next/link";

export default function Home() {
    let name = 'hailey';
    let link = "https://www.google.com"
    return (
        <div>
            {/* navbar 페이지 전체에 두기때문에 layout.js로 빼줌 */}
            <a href={link} style={{ color: "#fff", fontSize: "30px" }}>
                <h1 className="title">Market</h1>
            </a >
            <p className="title-sub">{name}</p>
        </div >
    )
}
