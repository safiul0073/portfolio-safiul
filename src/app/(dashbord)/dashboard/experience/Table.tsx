"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Table = () => {
  const [projects, setProjects] = useState([]);

  useEffect( () => {
    const getProject = async () => {
      const res = await fetch("/api/experience");
      const data = await res.json();
      setProjects(data);
    }

    getProject();
  }, []);

  const deleteProject = async (id: number) => {
    const res = await fetch(`/api/experience`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    if (res.ok) {
      setProjects(projects.filter((project: any) => project.id !== id));
    }
  }
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Stack</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {projects.map((project: any) => (
              <tr key={project.id}>
                <td className="text-center">{project.id}</td>
                <td className="text-center">{project.name}</td>
                <td className="text-center">{project.stacks}</td>
                <td className="text-center">{project.description}</td>
                <td className="text-center">
                  <Link
                    href={`/dashboard/projects/${project.id}/edit`}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  