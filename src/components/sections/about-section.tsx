import { SectionWrapper } from "@/components/layout/section-wrapper";
import { personalInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, BookOpen, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-secondary/30 dark:bg-secondary/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
        <p className="mt-4 text-lg text-muted-foreground">A Glimpse into My Journey and Philosophy</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <UserCircle className="w-10 h-10 text-primary" />
            <CardTitle className="text-2xl">Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{personalInfo.aboutMe.background}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{personalInfo.aboutMe.education}</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <Lightbulb className="w-10 h-10 text-primary" />
            <CardTitle className="text-2xl">Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{personalInfo.aboutMe.approach}</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
