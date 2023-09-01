
function TagsList({tagsArray}) {
  const tagsItems = tagsArray.map(tag =>
    <>
      <a href={'/id' + tag.id} class="tag">{tag.name}</a>
      <span>{tagsArray.indexOf(tag) !== (tagsArray.length - 1) ? (',') : (' ')} </span>
    </>
  );

  return (
    <>{tagsItems}</>
  );
}

export default TagsList;
