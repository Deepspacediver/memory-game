const importImages = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// Get object of all images with sources
const images = importImages(require.context("../assets/images", false, /.jpg/));

const sortImages = (obj) => {
  const sortedImages = [];
  for (const key in obj) {
    const newKey = key.replace(".jpg", "").replaceAll("-", " ");
    sortedImages.push({ name: newKey, src: obj[key] });
  }
  return sortedImages;
};

const imagesArray = sortImages(images);

export default imagesArray;
