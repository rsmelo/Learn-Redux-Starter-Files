const increment = (index) =>  ({
  type: 'INCREMENT_LIKES',
  index
});

const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
});

const removeComment = (postId, i) => ({
  type: 'REMOVE_COMMENT',
  postId,
  i
});