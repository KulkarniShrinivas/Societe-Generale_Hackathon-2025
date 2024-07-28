export const handleImgClick = (src: any, title: any, setDialogOpen: any) => {
  setDialogOpen({
    img: src,
    state: true,
    title,
  });
};

export function srcset(image: any, size: any, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function btnClickHandler(router: any, isDesktopScreen: boolean, category: string) {
  router.push("/photos/" + category);

  !isDesktopScreen &&
    window.scrollTo({
      top: 200,
      behavior: "smooth", // Smooth scrolling animation
    });
}
