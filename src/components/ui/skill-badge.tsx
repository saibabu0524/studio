import type { Skill } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const IconComponent = skill.icon;
  return (
    <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      {IconComponent && <IconComponent className="w-10 h-10 mb-3 text-primary" />}
      <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
      {skill.level && (
        <div className="w-full mt-auto">
          <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2"/>
          <p className="text-xs text-muted-foreground mt-1">{skill.level}% Proficiency</p>
        </div>
      )}
    </Card>
  );
}
