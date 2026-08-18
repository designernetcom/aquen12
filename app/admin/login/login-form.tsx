"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LoaderCircle } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError("We could not verify those details. Please try again.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <form className="admin-form admin-login-form" onSubmit={submit}>
      <label>
        Work email
        <input className="admin-input" name="email" type="email" placeholder="name@company.com" autoComplete="email" required />
      </label>
      <label>
        Password
        <div className="admin-password-wrap">
          <input className="admin-input" name="password" type={show ? "text" : "password"} placeholder="Enter your password" autoComplete="current-password" minLength={8} required />
          <button className="admin-password-toggle" type="button" onClick={() => setShow((value) => !value)} aria-label={show ? "Hide password" : "Show password"}>
            {show ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </label>
      <div className="admin-login-options">
        <label className="admin-checkbox"><input name="remember" type="checkbox" /> Remember me</label>
        <Link className="admin-login-link" href="/admin/forgot-password">Forgot password?</Link>
      </div>
      {error && <p className="admin-login-error" role="alert">{error}</p>}
      <button className="admin-button admin-login-submit" disabled={loading}>
        {loading ? <LoaderCircle className="spin" size={18} /> : <>Enter workspace <ArrowRight size={16} /></>}
      </button>
    </form>
  );
}
