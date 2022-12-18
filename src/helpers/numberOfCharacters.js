function numberOfCharacters(title) {
  if (title.length > 100) {
    return (title.slice(0, 100)) + "...";
  } else {
    return title;
  }
}

export default numberOfCharacters;