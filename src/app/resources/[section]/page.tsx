import Title from "@/components/Title";

export async function generateStaticParams() {
  const pages = ["resume", "cover", "interview", "prof"];

  return pages.map((post) => ({
    section: post,
  }));
}
export default function Page({ params }: { params: { section: string } }) {
  return (
    <div>
      <Title />
      <p>Current resource page: {params.section}</p>
    </div>
  );
}
