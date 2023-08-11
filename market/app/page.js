
export default function Home() {
    let name = 'hailey';
    let link = "https://www.google.com"
    return (
        <div>
            <a href={link} style={{ color: "#fff", fontSize: "30px" }}>
                <h1 className="title">Market</h1>
            </a >
            <p className="title-sub">{name}</p>
        </div >
    )
}
