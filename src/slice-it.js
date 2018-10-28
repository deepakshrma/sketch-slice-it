import sketch from "sketch";
import { mkdirSync } from "@skpm/fs";
import path from "@skpm/path";
import { execSync } from "@skpm/child_process";

// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  const filePath = context.document.fileURL();
  let filePathStr = filePath.toString();
  if (filePathStr.indexOf("file://") !== -1) {
    filePathStr = filePath.toString().replace("file://", "");
    const filePathDir = `${path.dirname(filePathStr)}/slices`;
    mkdirSync(filePathDir);
    var result = execSync(
      `/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool export slices ${filePathStr} --output=${filePathDir} --formats=jpg,png,svg`
    ).toString();
    sketch.UI.message("Slice it done, Success 🙌");
  } else {
    sketch.UI.message("😢 Supported only local file, Cloud will come later");
  }
}
