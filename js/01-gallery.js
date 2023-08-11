import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onOpenModalImage);


function onOpenModalImage(event) {
  if (event.target.nodeName !== "IMG") return;

  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width=1280>`,

    {onShow: (instance) => document.addEventListener("keydown", makeCloseEscape),
    onClose: (instance) => document.removeEventListener("keydown", makeCloseEscape)
  });

  instance.show();

  function makeCloseEscape(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }
};

function createGallery(galleryItems) {
  return galleryItems.map((galleryItem) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
      />
    </a>
  </li>`).join("");
  };

  const addGalleryMarkup = createGallery(galleryItems);
  galleryEl.innerHTML = addGalleryMarkup;