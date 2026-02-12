import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-230px)] text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
        <br />
        Trang bạn đang tìm không tồn tại.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home / Về trang chủ
      </Link>
    </div>
  );
}
