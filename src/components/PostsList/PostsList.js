import PostCard from 'components/PostCard';
import styles from './PostsList.module.scss';

const PostsList = ({ posts, options = {} }) => {
  return (
    <ul className={'grid md:grid-cols-2 lg:grid-cols-3 gap-10 ' + styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            <PostCard post={post} options={options} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
