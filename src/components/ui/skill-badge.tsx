
import type { Skill } from "@/types";
import { Card } from "@/components/ui/card"; // Removed CardContent as it's not directly used for layout here
import { Progress } from "@/components/ui/progress";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const IconComponent = skill.icon;
  return (
    <Card className="p-4 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center motion-safe:hover:scale-105 motion-safe:hover:-translate-y-1 h-full">
      {IconComponent && <IconComponent className="w-10 h-10 mb-3 text-primary shrink-0" />}
      <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
      {skill.level && (
        <div className="w-full mt-auto pt-2"> {/* Added pt-2 for spacing */}
          <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2"/>
          <p className="text-xs text-muted-foreground mt-1">{skill.level}% Proficiency</p>
        </div>
      )}
    </Card>
  );
}
