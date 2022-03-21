export const confirmRemove = (remove) => {
  const confirmRemove = confirm("desea remover o item?");
  return confirmRemove ? remove() : !false;
};
