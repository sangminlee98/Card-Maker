class ImageUploader {
  async upload(file){
    const url = "https://api.cloudinary.com/v1_1/dc8hqqxnw/image/upload";

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ugjbzqyl");

        const result = await fetch(url, {
          method: "POST",
          body: data
        });
        return await result.json();
  }
}

export default ImageUploader