export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1d072e] to-[#0a0a23] text-white flex-col gap-6">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-purple-700 animate-spin" />
        <div className="absolute inset-3 bg-gradient-to-tr from-purple-900 via-pink-800 to-blue-500 rounded-full blur-sm opacity-70 animate-pulse" />
        <div className="absolute inset-6 bg-black rounded-full" />
      </div>

      <h1 className="text-2xl font-bold animate-pulse text-center">
        Loading the <span className="text-purple-400">Page</span>...
      </h1>

      <p className="text-sm text-gray-300 tracking-wide text-center">
        Please wait while we prepare your experience 🌐
      </p>
    </div>
  );
}
