import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");


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

const gallery = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: "250",
  captionsData: "alt",
});