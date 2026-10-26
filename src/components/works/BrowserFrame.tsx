export default function BrowserFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-url">biotama.cv</span>
      </div>
      <div className="browser-screen">
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
      </div>
    </div>
  );
}
