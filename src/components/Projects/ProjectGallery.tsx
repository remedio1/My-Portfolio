"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { ProjectKeys, Project } from "./ProjectData";

export default function ProjectGallery() {
  const t = useTranslations("projects");

  const TranslatedMaps: Project[] = ProjectKeys.map((projectKey) => ({
    name: t(projectKey.titleKey),
    description: t(projectKey.descriptionKey),
    technologies: t(projectKey.technologiesKey),
    link: t(projectKey.linkKey),
  }));

  return (
    <div>ProjectGallery</div>
  )
}
