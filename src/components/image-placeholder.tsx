import Image from "next/image";

type ImagePlaceholderProps = {
  src: string;
  title: string;
  caption?: string;
  height?: string;
  mobileRatio?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImagePlaceholder({
  src,
  title,
  height = "min-h-[280px]",
  mobileRatio = "aspect-[16/9]",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw"
}: ImagePlaceholderProps) {
  return (
    <div
      className={`interactive-media relative overflow-hidden rounded-[28px] border border-black/5 bg-[var(--color-white-smoke)] shadow-[var(--shadow-xl)] ${mobileRatio} sm:aspect-auto ${height}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className="object-cover object-center"
      />
    </div>
  );
}
