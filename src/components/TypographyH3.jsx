export default function TypographyH3({ children, className }) {
  return (
    <h3
      className={`scroll-m-20 text-3xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}
