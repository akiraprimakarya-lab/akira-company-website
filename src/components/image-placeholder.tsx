import Image from "next/image";

type ImagePlaceholderProps = {
  src: string;
  title: string;
  caption?: string;
  height?: string;
  mobileRatio?: string;
  mobileImageFit?: "cover" | "contain";
  desktopImageFit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
};

export function ImagePlaceholder({
  src,
  title,
  height = "min-h-[280px]",
  mobileRatio = "aspect-[16/9]",
  mobileImageFit = "cover",
  desktopImageFit = "cover",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw"
}: ImagePlaceholderProps) {
  const mobileFitClassName = mobileImageFit === "contain" ? "object-contain" : "object-cover";
  const desktopFitClassName = desktopImageFit === "contain" ? "sm:object-contain" : "sm:object-cover";

  return (
    <div
      className={`interactive-media relative w-full max-w-full overflow-hidden rounded-[28px] border border-black/5 bg-[var(--color-white-smoke)] shadow-[var(--shadow-xl)] ${mobileRatio} sm:aspect-auto ${height}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className={`${mobileFitClassName} ${desktopFitClassName} object-center`}
      />
    </div>
  );
}
