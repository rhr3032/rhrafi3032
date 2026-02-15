import Link from "next/link";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-xl w-full text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                <h1 className="text-2xl font-semibold text-zinc-900">Thanks for reaching out!</h1>
                <p className="mt-3 text-sm text-zinc-500">
                    Your message has been sent. I will review your request and get back to you soon.
                </p>
                <Link
                    href="/"
                    className="inline-flex mt-6 px-6 py-2.5 rounded-full bg-gradient-to-tl from-orange-700 to-orange-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
                >
                    Back to home
                </Link>
            </div>
        </main>
    );
}
