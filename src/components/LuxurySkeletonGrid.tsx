"use client";

import React from "react";

type SkeletonRatio = "video" | "portrait" | "square";

type LuxurySkeletonGridProps = {
  count?: number;
  ratio?: SkeletonRatio;
  minHeight?: string;
};

type LuxurySkeletonFrameProps = {
  ratio?: SkeletonRatio;
  minHeight?: string;
  className?: string;
};

type LuxuryTextSkeletonProps = {
  rows?: number;
  className?: string;
};

const ratioClasses: Record<SkeletonRatio, string> = {
  video: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function LuxurySkeletonFrame({
  ratio = "video",
  minHeight = "min-h-[450px]",
  className = "",
}: LuxurySkeletonFrameProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden rounded-2xl border border-kaza-navy-light/40 bg-kaza-navy-light ${ratioClasses[ratio]} ${minHeight} ${className}`}
    >
      <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-r from-kaza-navy-light via-kaza-navy/40 to-kaza-navy-light" />
      <div className="absolute inset-x-6 bottom-6 space-y-3">
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-kaza-gold/25" />
        <div className="h-3 w-1/2 animate-pulse rounded-full bg-white/15" />
      </div>
    </div>
  );
}

export function LuxuryTextSkeleton({ rows = 3, className = "" }: LuxuryTextSkeletonProps) {
  return (
    <div aria-hidden="true" className={`space-y-3 ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={`h-3 animate-pulse rounded-full bg-gradient-to-r from-kaza-navy-light/20 via-kaza-gold/20 to-kaza-navy-light/20 ${
            index === rows - 1 ? "w-7/12" : index % 2 === 0 ? "w-full" : "w-10/12"
          }`}
        />
      ))}
    </div>
  );
}

export default function LuxurySkeletonGrid({
  count = 3,
  ratio = "portrait",
  minHeight = "min-h-[450px]",
}: LuxurySkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
      {Array.from({ length: count }).map((_, index) => (
        <LuxurySkeletonFrame
          key={index}
          ratio={ratio}
          minHeight={minHeight}
          className={index === 0 ? "md:translate-y-6" : index === 2 ? "md:translate-y-12" : ""}
        />
      ))}
    </div>
  );
}
