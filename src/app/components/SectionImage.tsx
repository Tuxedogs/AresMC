export function SectionImage({
  src,
  alt,
  caption,
  wide,
  compact,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
  compact?: boolean;
}) {
  return (
    <figure className={compact ? "my-5" : "my-8"}>
      <div
        className={[
          "mx-auto overflow-hidden rounded-lg border border-indigo-900/30 bg-black/20",
          wide ? "max-w-5xl" : "max-w-3xl",
        ].join(" ")}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>

      {caption ? (
        <figcaption className="mx-auto mt-2 max-w-3xl text-center text-xs text-gray-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}