import { PageHeader } from "@/components/dashboard/PageHeader";
import PrimaryButton from "@/components/dashboard/PrimaryButton";
import Table from "./Table";

const index = () => {
  return (
    <>
      <PageHeader title="Projects">
        <PrimaryButton url="/dashboard/projects/create">
          Add Project
        </PrimaryButton>
      </PageHeader>
      <Table />
    </>
  );
};

export default index;
