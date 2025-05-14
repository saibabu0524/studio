import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SkillBadge } from "@/components/ui/skill-badge";
import { skills } from "@/lib/data";
import type { Skill } from "@/types";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">Technologies I Work With</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill: Skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
