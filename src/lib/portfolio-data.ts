import "server-only";

import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { portfolioItemSeeds, type PortfolioFolder, type PortfolioItem } from "@/lib/portfolio-content";

const allowedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const maxImagesPerCategory = 6;

const portfolioRootCandidates = [
  {
    diskPath: path.join(process.cwd(), "public", "images", "portfolio"),
    publicPath: "/images/portfolio"
  },
  {
    diskPath: path.join(process.cwd(), "public", "images", "portofolio"),
    publicPath: "/images/portofolio"
  }
] as const;

function resolvePortfolioRoot() {
  const matchedRoot = portfolioRootCandidates.find((candidate) => existsSync(candidate.diskPath));

  if (!matchedRoot) {
    throw new Error("Portfolio image folder was not found in public/images.");
  }

  return matchedRoot;
}

function readPortfolioFolder(folder: PortfolioFolder) {
  const portfolioRoot = resolvePortfolioRoot();
  const absoluteFolderPath = path.join(portfolioRoot.diskPath, folder);

  return readdirSync(absoluteFolderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && allowedImageExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" }))
    .slice(0, maxImagesPerCategory)
    .map((fileName) => `${portfolioRoot.publicPath}/${folder}/${fileName}`);
}

export function getPortfolioItems(): PortfolioItem[] {
  const folderCache = new Map<PortfolioFolder, string[]>();

  return portfolioItemSeeds.map((item) => {
    if (!folderCache.has(item.folder)) {
      folderCache.set(item.folder, readPortfolioFolder(item.folder));
    }

    return {
      ...item,
      images: folderCache.get(item.folder) ?? []
    };
  });
}
