import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-serif text-6xl text-burgundy">404</p>
      <h1 className="mt-4 font-serif text-3xl text-ink">Page not found</h1>
      <p className="mt-2 text-ink/70">
        The piece you&apos;re looking for may have found a new home.
      </p>
      <Link href="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </div>
  );
}
