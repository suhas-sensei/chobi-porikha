import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <br />
      <Image
        src="/chobitest.png" // Relative path to the image
        width={300} // Replace with actual width of the image
        height={500} // Replace with actual height of the image
        className="ml-8"
        alt="Dynamic Island"
      />
    </>
  );
}
