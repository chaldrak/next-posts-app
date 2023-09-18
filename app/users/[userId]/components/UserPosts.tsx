import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;
  const content = posts.map((item) => (
    <article key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <hr />
    </article>
  ));
  return <div>{content}</div>;
};

export default UserPosts;
