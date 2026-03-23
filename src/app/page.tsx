'use client'

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createProject = useMutation(api.projects.createProject);
  const projects = useQuery(api.projects.getProjects);
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button
        onClick={() =>
          createProject({
            name: "New project123",
          })
        }
      >
        Add new
      </Button>

      {projects?.map((project) => (
        <div className="border rounded p-2 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>Owner Id: {project.ownerId}</p>
        </div>
      ))}
    </div>
  );
}
