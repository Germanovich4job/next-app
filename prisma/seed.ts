import prisma from "@/lib/db";

async function main() {
  const blogPosts = [
    {
      slug: "learn3",
      title: "learn3",
      content: "# learn3",
    },
    {
      slug: "learn3",
      title: "learn3",
      content: "# learn3",
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  console.log("seedSuccessfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
