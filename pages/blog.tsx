import {Container, Card, Row, Text, Grid, Button, Spacer, Col} from "@nextui-org/react";


import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link";

export const getPosts = () => {
    const files = fs.readdirSync(path.join("posts"));
    const allPostsData = files.map((fileName) => {
        const slug = fileName.replace(".mdx", "");
        const fileContents = fs.readFileSync(
            path.join(`posts/${slug}.mdx`),
            "utf8"
        );
        const { data } = matter(fileContents);
        return {
            slug,
            data,
        };
    });

    return allPostsData;
};

export const getPost = (slug) => {
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
    const { data, content } = matter(fileContents);
    return {
        data,
        content,
    };
};

export default function Home({ posts }) {
  return (
<>
              <Container>
                  <Row justify="center">
                      <div className="name-text">
                          <Text
                              h1
                              size={60}
                              css={{
                                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                              }}
                              weight="bold"
                          >
                              Blog
                          </Text>
              </div>
                  </Row>

                  {posts.map((post) => (
                      <div className="blog-link">
                      <Link href={post.slug}>
                      <Row justify="center" className="text-center">

                      <Text size={20} weight="light" className="bio-text">
                        {post.data.title} - {post.data.date} <br/>
                  {post.data.description}
                      </Text>

                      </Row></Link>
                          </div>
                  ))}

              </Container></>

  )
}

export const getStaticProps = () => {
    const posts = getPosts();

    return {
        props: {
            posts,
        },
    };
};
