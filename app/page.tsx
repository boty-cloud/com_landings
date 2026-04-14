import Image from "next/image";

export default function Home() {
  return (
    <div className="root-index">
      <div>
        <Image
          src="/logos/Boty/Version negativo.png"
          alt="Boty"
          width={200}
          height={50}
          priority
        />
        <h1>Boty Proposals</h1>
        <p>Las propuestas se acceden mediante su enlace exclusivo.</p>
      </div>
    </div>
  );
}
