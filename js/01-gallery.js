import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  divGalleryEl: document.querySelector(".gallery"),
};

refs.divGalleryEl.append(...createGallery(galleryItems));

refs.divGalleryEl.addEventListener("click", onOpenModalImage);

function onOpenModalImage(event) {
  if (event.target.nodeName !== "IMG") return;

  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width=1280>
`);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") return;
    instance.close();
  });
}

function createGallery(arrOfGallaryItems) {
  return arrOfGallaryItems.map((galleryItem) => {
    const galleryItemEl = document.createElement("div");
    const galleryLinkEl = document.createElement("a");
    const galleryImageEl = document.createElement("img");

    galleryImageEl.classList.add("gallery__image");
    galleryImageEl.setAttribute("src", galleryItem.preview);
    galleryImageEl.setAttribute("alt", galleryItem.description);
    galleryImageEl.dataset.source = galleryItem.original;

    galleryLinkEl.classList.add("gallery__link");
    galleryLinkEl.setAttribute("href", galleryItem.original);

    galleryItemEl.classList.add("gallery__item");

    galleryLinkEl.append(galleryImageEl);
    galleryItemEl.append(galleryLinkEl);

    return galleryItemEl;
  });
}