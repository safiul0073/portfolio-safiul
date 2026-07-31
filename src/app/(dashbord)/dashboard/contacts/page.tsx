import { PageHeader } from "@/components/dashboard/PageHeader";
import ContactMessagesTable from "./table";

export default function ContactsPage() {
  return (
    <>
      <PageHeader title="Contact Messages" />
      <ContactMessagesTable />
    </>
  );
}
