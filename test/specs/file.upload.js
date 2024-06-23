import { $ } from "@wdio/globals";
import * as path from "path";

const fileName = "test.txt";
const fullPathToFile = path.resolve(`./uploads/${fileName}`);

describe("File Upload test", () => {
  it("file should be uploaded from the default uploads directory", async () => {
    await $('[href="/upload"]').click();

    let fileUpload = await $("#file-upload");
    await fileUpload.setValue(fullPathToFile);
    //upload file wih fullPathToFile path
    await $('[id="file-submit"]').click();
    
    let uploadedFiles = await $('[id="uploaded-files"]').getText();
    //expect that fileName on Upload page is correct
    await expect(uploadedFiles).toEqual(fileName);
  });
});
