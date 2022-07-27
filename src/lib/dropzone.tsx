import {
  useGetReport,
  useImgRecoilDropzone,
  useSetImgRecoilDrop,
  useSetterImg,
} from "hooks";
import React, { useState, useEffect } from "react";

import { useDropzone } from "React-dropzone";
import css from "./dropzone.css";
type PropsDropzone = {
  pictureURL?: string;
};

function DropzoneComp(props: PropsDropzone) {
  const imagenDropzoneRecoil: any = useImgRecoilDropzone();
  const [files, setFiles] = useSetImgRecoilDrop();

  const [imagenComp, setImgComp] = useState({ imageURL: props.pictureURL });
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          setFiles({ imageZone: e.target.result });
          setImgComp({ imageURL: e.target.result as any });
        };
      });
    },
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className={css.dropImg}>Clicka aquí para buscar imagen</p>
      </div>
      <aside>
        <img style={{ width: "115px" }} src={imagenComp.imageURL} />
      </aside>
    </section>
  );
}

export { DropzoneComp };
