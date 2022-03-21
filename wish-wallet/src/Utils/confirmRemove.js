export const confirmRemove = (remove) => {
  const confirmRemoveItem = confirm("desea remover o item?");
  return confirmRemoveItem ? remove() : !false;
};
