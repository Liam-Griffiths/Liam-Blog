
import { MDXRemote } from "next-mdx-remote";

import { serialize } from "next-mdx-remote/serialize";
import {getPost, getPosts} from "./blog";
import {Container, Row, Text} from "@nextui-org/react";


function Post({ data, content }) {
    return (
    <>
        <Container>
            <div className="article">
            <Row justify="center">
                <div className="article-head-text">
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        {data.title}
                    </Text>
                    <time className="text-gray-500 italic">{data.date}</time>
                </div>
            </Row>

            <Row>

                <Text className="article-text">
                    <MDXRemote {...content} />
                </Text>

            </Row>
            </div>

        </Container></>
    );
}

export default Post;

export const getStaticPaths = async () => {
    const posts = await getPosts();
    const paths = posts.map((post) => ({ params: { slug: post.slug } }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug);
    const mdxSource = await serialize(post.content);
    return {
        props: {
            data: post.data,
            content: mdxSource,
        },
    };
};