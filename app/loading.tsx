import { SkeletonCard } from "@/components/skeletonCard";

function Loading() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {"123456789".split("").map((id) => {
        return <SkeletonCard key={id} />;
      })}
    </div>
  );
}

export default Loading;
