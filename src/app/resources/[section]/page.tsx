export async function generateStaticParams() {
  const pages = ["resume", "cover", "interview", "prwebp"];

  return pages.map((post) => ({
    section: post,
  }));
}
export default function Page({ params }: { params: { section: string } }) {
  return (
    <div>
      <p>Current resource page: {params.section}</p>
    </div>
  );
}
