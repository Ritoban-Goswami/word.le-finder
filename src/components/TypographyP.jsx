export default function TypographyP({ children, className }) {
  return (
    <p
      className={`leading-7 sm:text-lg [&:not(:first-child)]:mt-4 ${className}`}
    >
      {children}
    </p>
  );
}
