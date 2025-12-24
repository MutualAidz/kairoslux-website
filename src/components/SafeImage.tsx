import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
};

function SafeImage({
  src,
  alt,
  className,
  placeholderClassName,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-hidden="true"
        className={
          placeholderClassName ??
          "w-full max-w-lg rounded-lg border border-[#f5c96c]/20 bg-white/60 shadow-sm"
        }
        style={{ minHeight: 260 }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export default SafeImage;
