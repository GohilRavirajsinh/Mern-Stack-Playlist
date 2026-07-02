'use client'
// import Image from "next/image"; // this is for Image component that not define in example

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: 'Gamer',
      role: 'Frager'
    }
    let a = await fetch('/api/add', {
      method: 'POST', headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res);
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js api routes demo</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}