import Tag from './Tag';

interface Props {
  tags: string[];
}

const TagsList = ({ tags }: Props) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag}></Tag>
      ))}
    </>
  );
};

export default TagsList;
