export const confirmRemove = (remove) => {
  const confirmRemoveItem = confirm("desea remover o item?");
  return confirmRemoveItem ? remove() : !false;
};

// reference: https://www.devmedia.com.br/alert-em-javascript/37208
