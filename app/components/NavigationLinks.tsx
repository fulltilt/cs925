import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LessonNavigationProps {
  prevLesson: {
    slug: string;
    title: string;
  } | null;
  nextLesson: {
    slug: string;
    title: string;
  } | null;
}

export default function NavigationLinks({
  prevLesson,
  nextLesson,
}: LessonNavigationProps) {
  return (
    <div className="mt-8 border-t pt-8">
      <nav className="flex justify-between">
        {prevLesson ? (
          <Link
            href={`${prevLesson.slug}`}
            passHref
            className="flex gap-4 items-center no-underline hover:bg-gray-100 dark:hover:bg-black rounded-lg p-4"
          >
            <ChevronLeft className="h-4 w-4" />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold tracking-wide no-underline uppercase text-[rgb(64,71,86)]">
                Previous
              </span>
              <span className="text-lg hover:underline lg:inline text-[rgb(8,126,164)]">
                {prevLesson.title}
              </span>
            </div>
          </Link>
        ) : (
          <div /> // Empty div to maintain layout when there's no previous lesson
        )}

        {nextLesson ? (
          <Link
            href={`${nextLesson.slug}`}
            passHref
            className="flex gap-4 items-center no-underline hover:bg-gray-100 hover:dark:bg-black rounded-lg p-4 max-w-sm"
          >
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm font-bold tracking-wide no-underline uppercase text-[rgb(64,71,86)]">
                Next
              </span>
              <span className="text-lg hover:underline  text-[rgb(8,126,164)] text-end">
                {nextLesson.title}
              </span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <div /> // Empty div to maintain layout when there's no next lesson
        )}
      </nav>
    </div>
  );
}
