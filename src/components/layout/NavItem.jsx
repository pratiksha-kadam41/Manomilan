import { Link } from 'react-router-dom';

const cls = 'text-gray-600 hover:text-primary transition duration-300 text-[19px]';

export default function NavItem({ to, href, children, onClick, className = cls }) {
  if (to) return <Link to={to} onClick={onClick} className={className}>{children}</Link>;
  return <a href={href} onClick={onClick} className={className}>{children}</a>;
}