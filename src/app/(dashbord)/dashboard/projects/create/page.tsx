"use client";
import { PageHeader } from "@/components/dashboard/PageHeader";
import PrimaryButton from "@/components/dashboard/PrimaryButton";
import InputGroup from "@/components/dashboard/ui/InputGroup";
import { useState } from "react";
import TextAreaGroup from "@/components/dashboard/ui/TextAreaGroup";
import ShortList from "./ShortList";
import { formTypes } from "@/app/api/projects/route";

export default function Page() {
  const [form, setForm] = useState<formTypes>({
    id: 0,
    name: "",
    stacks: "",
    description: "",
    website: "",
    repository: "",
    short_list: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.stacks) return;
    fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(() => {
      setForm({
        id: 0,
        name: "",
        stacks: "",
        description: "",
        website: "",
        repository: "",
        short_list: [],
      });
      alert("Project created successfully");
    });
  };
  return (
    <>
      <PageHeader title="Projects">
        <PrimaryButton url="/dashboard/projects">Back</PrimaryButton>
      </PageHeader>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto"
      >
        <InputGroup
          label="Name"
          name="name"
          type="text"
          placeholder="Project Name"
          value={form.name}
          setValue={setForm}
        />
        <InputGroup
          label="Stacks"
          name="stacks"
          type="text"
          placeholder="Project stacks"
          value={form.stacks}
          setValue={setForm}
        />
        <div className="col-span-2">
          <ShortList setValue={setForm} value={form} />
        </div>
        <InputGroup
          label="Website"
          name="website"
          type="text"
          placeholder="Project website"
          value={form.website}
          setValue={setForm}
        />
        <InputGroup
          label="Git Repository"
          name="repository"
          type="text"
          placeholder="Project repository"
          value={form.repository}
          setValue={setForm}
        />
        <div className="col-span-2">
          <TextAreaGroup
            label="Description"
            name="description"
            type="text"
            placeholder="Project description"
            value={form.description}
            setValue={setForm}
          />
        </div>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    </>
  );
}
