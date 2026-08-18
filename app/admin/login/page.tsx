import Image from "next/image";
import { redirect } from "next/navigation";
import { BadgeCheck, Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { auth } from "@/lib/auth";
import LoginForm from "./login-form";

export default async function LoginPage() {
  if (await auth()) redirect("/admin");

  return (
    <main className="admin-login">
      <div className="admin-login-grid" aria-hidden="true" />
      <div className="admin-login-shell">
        <section className="admin-login-story">
          <div className="admin-login-story-top">
            <span className="admin-login-story-mark"><Droplets size={17} /></span>
            AQUEN CONTENT STUDIO
          </div>

          <div className="admin-login-story-copy">
            <span className="admin-login-kicker"><Sparkles size={13} /> Built for focused teams</span>
            <h1>Shape every digital experience.</h1>
            <p>One calm workspace to manage solutions, projects, media, search visibility, and the stories your customers see.</p>
          </div>

          <div className="admin-login-proof">
            <span><ShieldCheck size={12} /> Secure workspace</span>
            <span><BadgeCheck size={12} /> Role-based access</span>
          </div>
        </section>

        <section className="admin-login-panel">
          <div className="admin-login-box">
            <Image className="admin-login-logo" src="/aquenfluid-logo.png" alt="AQUEN Fluid" width={180} height={52} priority />
            <h2 className="admin-login-heading">Welcome back.</h2>
            <p className="admin-login-subtitle">Enter your administrator details to continue to the studio.</p>
            <LoginForm />
            <div className="admin-login-security"><ShieldCheck size={12} /> Protected with encrypted session security</div>
          </div>
        </section>
      </div>
    </main>
  );
}
