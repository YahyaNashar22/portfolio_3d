const Tags = ({ tags }: { tags: { [key: string]: any } }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags &&
        tags.map((tag: { [key: string]: any }) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
    </div>
  );
};

export default Tags;
