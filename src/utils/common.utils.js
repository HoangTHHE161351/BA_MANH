export const getElementById = (id) => {
  if (typeof window !== "undefined") {
    return document.getElementById(id);
  }
};

export const handleConfigHeightOfTable = () => {
  const heightWindow = window.innerHeight;
  const tableEl = getElementById("table");
  const paginationEl = getElementById("pagination");

  if (tableEl && paginationEl) {
    const headerHeight = tableEl.getBoundingClientRect().top;
    const paginationHeight = paginationEl.getBoundingClientRect().height;

    tableEl.style.height =
      heightWindow - headerHeight - paginationHeight - 2 + "px";
  }
};

export function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
