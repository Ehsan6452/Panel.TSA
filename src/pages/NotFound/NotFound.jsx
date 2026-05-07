import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>صفحه مورد نظر پیدا نشد</p>
      <Link to="/dashboard">بازگشت به داشبورد</Link>
    </div>
  );
}
