"use client";
import { PageHeader } from "@/components/dashboard/PageHeader";
import PrimaryButton from "@/components/dashboard/PrimaryButton";

export default function Page({ params }: { params: { id: string } }) {

  return (
    <>
      <PageHeader title="Projects">
        <PrimaryButton url="/dashboard/projects">Back</PrimaryButton>
      </PageHeader>

    </>
  );
}
