export default function Logo({ className = "h-8 sm:h-9 w-auto" }) {
  return (
    <img
      src="/Logo.svg"
      alt="Hazze"
      className={className}
    />
  );
}
