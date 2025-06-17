"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { ProjectKeys, Project } from "./ProjectData";
import ProjectIndex from "./ProjectIndex";

export default function ProjectGallery() {
  const t = useTranslations("projects");
  

  const TranslatedMaps: Project[] = ProjectKeys.map((projectKey) => ({
    title: t(projectKey.title),
    description: t(projectKey.description),
    technologies: t.raw(projectKey.technologies).join(', '),
    link: t(projectKey.link),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">



    {TranslatedMaps.map((project) => (
      <ProjectIndex key={project.title} projects={project} />
    ))}


    </div>
  )
}
