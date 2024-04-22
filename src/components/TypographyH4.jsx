export default function TypographyH4({ children, className }) {
  return (
    <h4
      className={`mt-4 scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
}
