import React from "react";
import css from "./load.css";
function LoadingComp(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <div className={css.containerBalls}>
        <div className={css.ball}></div>
        <div className={css.ball}></div>
        <div className={css.ball}></div>
        <span className={css.span}>Loading...</span>
      </div>

      <div className={css.ContainerImgDog}>
        <img
          style={{ width: "300px", filter: "drop-shadow(9px 8px 13px #000)" }}
          src="./src/assets/dog_confused.png"
          alt=""
        />
      </div>
    </div>
  );
}
export { LoadingComp };

//     <div class="container-balls">
//     <div class="ball"></div>
//     <div class="ball"></div>
//     <div class="ball"></div>
//     <span class="span">${this.textContent}</span>
// </div>
// class LoadComp extends HTMLElement {
//   connectedCallback() {
//     this.render();
//     const style = document.createElement("style");
//     style.innerHTML = `
//       .container-balls{
//           width:120px;
//           height:75px;
//           display:flex;
//           flex-wrap:wrap;
//           align-items:flex-end;
//           justify-content:space-between;
//       }
//       .span{
//           font-size:22px;
//           text-transform:uppercase;
//           margin:auto;
//       }
//       .ball{
//           width:25px;
//           height:25px;
//           border-radius:50%;
//           background-color:#fff;
//           animation: bounce .5s alternate infinite;
//       }
//       .ball:nth-child(2){
//           animation-delay: .16s;
//       }
//       .ball:nth-child(3){
//           animation-delay: .32s;
//       }
//       @keyframes bounce {
//           from{
//               transform:scaleX(1.25);
//           }
//           to{
//               transform:
//               translateY(-50px) scaleX(1);
//           }
//       }

//       `;
//     this.appendChild(style);
//   }

//   render() {
//     this.innerHTML = `
//       <div class="container-balls">
//           <div class="ball"></div>
//           <div class="ball"></div>
//           <div class="ball"></div>
//           <span class="span">${this.textContent}</span>
//       </div>
//         `;
//   }
// }
// customElements.define("load-comp", LoadComp);
