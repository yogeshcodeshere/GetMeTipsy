export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold">404</h1>

            <p className="text-xl mt-4">
                Page not found 😭
            </p>

            <a
                href="/"
                className="mt-6 px-5 py-2 bg-[#760940] rounded-lg"
            >
                Go Home
            </a>
        </div>
    )
}