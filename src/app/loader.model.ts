export class Loader {
  images = {};

  loadImage(key, src: string) {
    const img = new Image();

    const d = new Promise( (resolve, reject) => {
      img.onload = () => {
        this.images[key] = img;
        resolve(img);
      };

      img.onerror = function () {
        reject(`Could not load image: ${src}`)
      };
    });

    img.src = src;
    return d;
  }

  getImage(key) {
    return (key in this.images) ? this.images[key] : null;
  }

}
