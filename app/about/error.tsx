"use client";
export default function AboutError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        textAlign: "center",
        color: "#052c65",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div>
        <h1>We couldn’t load this page.</h1>
        <p>Please try again in a moment.</p>
        <button
          onClick={reset}
          style={{
            border: 0,
            borderRadius: 10,
            padding: "12px 18px",
            color: "#fff",
            background: "#008cff",
          }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
