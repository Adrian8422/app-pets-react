import {
  useGetReport,
  useImgRecoilDropzone,
  useSetImgRecoilDrop,
  useSetterImg,
} from "hooks/atom";
import React, { useState, useEffect } from "react";
const { useDropzone } = require("react-dropzone");

type PropsDropzone = {
  pictureURL?: string;
};

function DropzoneComp(props: PropsDropzone) {
  const styleDropzoneImg: any = {
    width: "106px",
    borderRadius: "7px",
    padding: "9px",
    backgroundColor: " darkseagreen",
    boxShadow: "2px 2px 5px 1px",
  };
  const imagenDropzoneRecoil: any = useImgRecoilDropzone();
  const [files, setFiles] = useSetImgRecoilDrop();

  const [imagenComp, setImgComp] = useState({ imageURL: props.pictureURL });
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    // "image/*": [],

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
        <p style={styleDropzoneImg}>Clicka aquí para buscar imagen</p>
      </div>
      <aside>
        <img style={{ width: "115px" }} src={imagenComp.imageURL} />
      </aside>
    </section>
  );
}

export { DropzoneComp };
