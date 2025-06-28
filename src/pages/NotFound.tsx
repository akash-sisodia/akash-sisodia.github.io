const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <a href="/" className="text-blue-400 hover:underline">Go Home</a>
    </div>
  );
};

export default NotFound;
