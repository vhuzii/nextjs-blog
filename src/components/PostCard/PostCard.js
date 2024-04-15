import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';
import FeaturedImage from 'components/FeaturedImage';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import { FaArrowRight } from 'react-icons/fa';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, featuredImage, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={'relative ' + postCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        {featuredImage && (
          <FeaturedImage
            {...featuredImage}
            src={featuredImage.sourceUrl}
            dangerouslySetInnerHTML={featuredImage.caption}
          />
        )}
        <h3
          className={styles.postCardTitle}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </Link>
      <Metadata className={styles.postCardMetadata} {...metadata} />
      <HTMLEllipsis className={styles.postCardContent} maxLine="3" unsafeHTML={sanitizeExcerpt(excerpt)} />
      <Link href={postPathBySlug(slug)}>
        <span className="absolute bottom-0 right-5 flex items-center gap-1 text-lg">
          <span>Read More</span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default PostCard;
