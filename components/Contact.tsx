import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EMAIL = "your.email@example.com"; // TODO: replace
const LINKEDIN = "https://www.linkedin.com/in/yourprofile"; // TODO: replace
const GITHUB = "https://github.com/lucabach"; // already known

export default function Contact() {
  return (
    <section className="mt-32 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <p className="text-gray-600 mb-10">
        I’m always excited to hear about new ideas, collaborations, and potential projects.
        If you’re working on something interesting or looking for a motivated engineer —
        feel free to reach out.
      </p>

      {/* Contact form */}
      <form
        action={`mailto:${EMAIL}`}
        method="POST"
        encType="text/plain"
        className="space-y-4 mb-10"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social icons */}
      <div className="flex justify-center gap-8 text-3xl">
        <a
          href={`mailto:${EMAIL}`}
          className="hover:scale-125 transition"
          aria-label="Email"
        >
          <FiMail />
        </a>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
