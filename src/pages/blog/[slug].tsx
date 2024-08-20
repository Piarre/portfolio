import BlurFade from "@/components/magicui/blur-fade";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { GetServerSidePropsContext, Metadata } from "next";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";

export async function generateMetadata({ post }: { post: any }): Promise<Metadata | undefined> {
  let { title, publishedAt: publishedTime, summary: description, image, published } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ post }: { post: any }) {
  if (!post) notFound();

  if (post.metadata.published === false) return;

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <BlurFade>
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">{post.metadata.title}</h1>
      </BlurFade>
      <BlurFade delay={0.1}>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.metadata.publishedAt)}</p>
          </Suspense>
        </div>
      </BlurFade>
      {(post.source as string).split("\n").map((html: any, i: any) => (
        <BlurFade delay={i * 0.1 + 0.3} key={i} className="pb-2">
          <article className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }}></article>
        </BlurFade>
      ))}
    </section>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { params } = ctx;
  return {
    props: {
      post: await getPost((params as any).slug),
    },
  };
}
