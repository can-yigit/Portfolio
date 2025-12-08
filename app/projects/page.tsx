import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjects } from "@/lib/api";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main className="main-content min-h-screen bg-neutral-50">
        <ProjectsClient projects={projects} />
      </main>
      <Footer />
    </>
  );
}
