export default function TypographyP({ children, className }) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}
