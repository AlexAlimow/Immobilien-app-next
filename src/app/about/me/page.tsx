import Link from "next/link";

export default function AboutMe() {
  const avatarUrl =
  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-svg-download-png-456327.png";
  
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">About me</h2>

      <p className="mb-4">
        Hi! I'm the developer of this project.
      </p>

      <Link
        href="/about"
        className="text-blue-600 hover:text-amber-600 underline"
      >
        Back to About
      </Link>
    </section>
  );
}