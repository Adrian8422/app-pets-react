import { useEffect } from "react";
import {
  atom,
  selector,
  useRecoilValue,
  useSetRecoilState,
  SetRecoilState,
} from "recoil";
const API_BASE_URL = "http://localhost:3002";

//// State Header Menu

const stateHeader = atom({
  key: "stateHeader",
  default: "",
});

console.log("stateheader", stateHeader);

//// Hook Heade Menu
export function useHeaderState(value) {
  const setValueInRecoil = useSetRecoilState(stateHeader);
  useEffect(() => {
    setValueInRecoil(value);
  }, [value]);
}

export function useBurgerActive() {
  const response = useRecoilValue(stateHeader);
  return response;
}

/// Atom MeLatLng
const LatLng = atom({
  key: "LatLng",
  default: "",
});
export function setValueLatLng(params) {
  const setValueInRecoil = useSetRecoilState(LatLng);
  useEffect(() => {
    setValueInRecoil(params);
  }, [params]);
}
export function useMeLatLng() {
  const response = useRecoilValue(LatLng);
  return response;
}

//// custom Hook Reports close to me
const latLng = atom({
  key: "lat&lng",
  default: "",
});
const getReports = selector({
  key: "report",
  get: async ({ get }) => {
    const data = get(latLng);
    if (data) {
      const res = await fetch(
        API_BASE_URL +
          "/reports-close-to?lat=" +
          data["lat"] +
          "&lng=" +
          data["lng"],
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const json = await res.json();
      console.log(json);
      return json;
    } else {
      return [];
    }
  },
});
export function useSetAlgolia() {
  const datos = useMeLatLng();
  const setDataLatLng = useSetRecoilState(latLng);
  const response = useRecoilValue(getReports);
  useEffect(() => {
    setDataLatLng(datos);
  }, [datos]);
  // console.log("datos en hook", datos["lat"]);
  return response;
}

///Hook getMeEmail user

const emailUser = atom({
  key: "email",
  default: "",
});

export function useSetEmail(email) {
  const saveRecoil = useSetRecoilState(emailUser);
  useEffect(() => {
    saveRecoil(email);
  }, [email]);
}
export function getEmailForSent() {
  const response = useRecoilValue(emailUser);
  return response;
}

////Hook sent email for report info
const setEmail = atom({
  key: "info",
  default: "",
});
const sentEmail = selector({
  key: "sentMessage",
  get: ({ get }) => {
    const data = get(setEmail);
    console.log("dato del selector", data);
  },
});
export function useSentEmail(dataMensaje, emailTambien) {
  // const email = getEmailForSent();
  console.log("dataInHook", dataMensaje, emailTambien);
  const datos = (dataMensaje += emailTambien);
  const saveInRecoilparaEnviarMsg = useSetRecoilState(datos);
  const response = useRecoilValue(sentEmail);
  useEffect(() => {
    saveInRecoilparaEnviarMsg(dataMensaje);
  });
  return;
}
