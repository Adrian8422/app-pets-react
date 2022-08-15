import { useUpdateMeData, useGetToken, useSetterRealToken } from "hooks/atom";
import { getEntriLogin, updateMeDate } from "lib/api";
import css from "./editMeComp.css";
import React from "react";
import { InputCompUI } from "ui/input-text";
import { ButtonComp } from "ui/button";
import { useNavigate } from "react-router-dom";
function EditMeComp() {
  const [token, setterToken] = useSetterRealToken();

  const navigate = useNavigate();
  // const token = useGetToken();
  const [meData, setMeData] = useUpdateMeData();
  console.log("token", token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.RepeatPassword.value;
    if (!password && !repeatPassword) {
      alert("Completa los campos password");
    }

    console.log("token en submit", token);
    if (password && repeatPassword) {
      if (password == repeatPassword) {
        const changesData = await updateMeDate(email, name, token);

        if (changesData) {
          getEntriLogin(email, password).then((data) => {
            console.log("data del fetch", data);
            setterToken(data.token);
          });
          setMeData({ email, name });
          alert("cambios realizados");

          navigate("/me");
        }
      }
    }
    // }
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputCompUI
          defaultValue={meData.email}
          type="text"
          name="email"
          // placeholder={meData.email}
        />
        <InputCompUI
          defaultValue={meData.name}
          type="text"
          name="name"
          // placeholder={meData.name}
        />
        <InputCompUI
          type="text"
          name="password"
          placeholder={"Ingrese password"}
        />
        <InputCompUI
          type="text"
          name="RepeatPassword"
          placeholder={"Repíta password"}
        />
        <ButtonComp>Modificar</ButtonComp>
      </form>
    </div>
  );
}
export { EditMeComp };
