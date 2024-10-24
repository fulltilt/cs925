import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Code,
  Layout,
  Database,
  Server,
  Globe,
  CheckCircle,
  NotepadText,
  User,
  HardDrive,
  Barcode,
} from "lucide-react";
import Link from "next/link";
import { z } from "zod";

export const moduleSchema = z.array(
  z.object({
    name: z.string(),
    icon: z.string(),
    modules: z.array(z.object({ module: z.string(), url: z.string() })),
    progress: z.number(),
  })
);

type ModuleType = z.infer<typeof moduleSchema>;

const icons = {
  1: <Globe className="h-5 w-5" />,
  2: <Layout className="h-5 w-5" />,
  3: <Layout className="h-5 w-5" />,
  4: <User className="h-5 w-5" />,
  5: <HardDrive className="h-5 w-5" />,
  6: <Database className="h-5 w-5" />,
  7: <Barcode className="h-5 w-5" />,
};

export default function Module({
  section,
  index,
}: {
  section: ModuleType;
  index: number;
}) {
  console.log(section);
  return (
    <AccordionItem value={`section-${index}`} key={index}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center">
          {icons[section.id]}
          <span className="ml-2">{section.title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2">
          {section.modules.map((lesson, lessonIndex) => (
            <li key={lessonIndex} className="flex items-center">
              <CheckCircle
                className={`h-4 w-4 mr-2 ${
                  section.progress > lessonIndex * 20
                    ? "text-green-500"
                    : "text-gray-300"
                }`}
              />
              <Link
                href={lesson.url}
                className="text-sm no-underline hover:underline"
              >
                {lesson.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Progress value={section.progress} className="w-full" />
          <p className="text-sm text-gray-500 mt-2">
            {section.progress}% Complete
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
