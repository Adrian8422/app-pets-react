import {
  getEntriLogin,
  getLatAndLng,
  getMeReports,
  setDataSignUp,
} from "lib/api";
import { recoilPersist } from "recoil-persist";
import { useEffect } from "react";
import {
  atom,
  selector,
  useRecoilValue,
  useSetRecoilState,
  SetRecoilState,
  useRecoilState,
  SetterOrUpdater,
  RecoilState,
} from "recoil";

const { persistAtom } = recoilPersist({
  key: "data_user", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

///// State current pages
/// Hook used to redirect to the selected page

const proxPage = atom({
  key: "Proxpage",
  default: "",
});
export const useSetPageState = () => useRecoilState(proxPage);
export const useGetStatePage = () => useRecoilValue(proxPage);

//// State Header Menu

const stateHeader = atom({
  key: "stateHeader",
  default: "",
});

//// Hook Heade Menu
export const useSetWindowHeaderState = () => useRecoilState(stateHeader);
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
const userLatLng = atom({
  key: "LatLng",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
export const setValueLatLng = () => useRecoilState(userLatLng);

export function useMeLatLng() {
  const response = useRecoilValue(userLatLng);
  return response;
}

//// custom Hook Reports close to me
const reportsCloseToMe = atom({
  key: "lat&lng",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const useSetAlgolia = () => useRecoilState(reportsCloseToMe);
export const useGetAlgoliaReports = () => useRecoilValue(reportsCloseToMe);

////Hook save user email

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

////Hook signUp

const signUpData: RecoilState<{ [key: string]: string }> = atom({
  key: "sigUpData",
  default: {
    nombre: null,
    email: null,
    password: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const useSetDataSignUp: any = () => useSetRecoilState(signUpData);
export const getDataSignUp = () => useRecoilValue(signUpData);

/// Hook get token
const dataSignin: RecoilState<{ [key: string]: string }> = atom({
  key: "dataSignin",
  default: {
    email: "",
    id: "",
    password: "",
    user_id: "",
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

//// hook getToken
const csToken = atom({
  key: "realToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const useSetterRealToken = () => useRecoilState(csToken);
export const useGetToken = () => useRecoilValue(csToken);
// const token = selector({
//   key: "token",
//   get: ({ get }) => {
//     const data = get(dataSignin);
//     const token = data.token;
//     if (token) {
//       return token;
//     } else {
//     }
//   },
// });

////Hook setter signIn data user

export const useSetInDataSignIn = () => useSetRecoilState(dataSignin);
export const useGetDataUser = () => useRecoilValue(dataSignin);
export const useSetChangesDataUser = () => useRecoilState(dataSignin);

/// Seter User active or nou
export const useSetActiveUser = () => useSetRecoilState(dataSignin);
export const useGetActiveUser = () => useRecoilValue(dataSignin);

//// hook update me data

export const useUpdateMeData = () => useRecoilState(dataSignin);

////ATOM & HOOK ME REPORTS
const mePets = atom({
  key: "reportsUser",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const useReportesDelUser = () => useRecoilValue(mePets);
export const useSetReportsUser = () => useRecoilState(mePets);
export const useSeterReportUser = () => useSetRecoilState(mePets);

///// Set img in Dropzone

const dropzone = atom({
  key: "dropzone_img",
  default: {},
});
export const useImgRecoilDropzone = () => useRecoilValue(dropzone);
export const useSetImgRecoilDrop = () => useRecoilState(dropzone);
export const useSetterImg = () => useSetRecoilState(dropzone);

/// Set coords reports atom&Hook
const mapboxCoords: RecoilState<{ [key: string]: string }> = atom({
  key: "coords_rep",
  default: {
    lat: null,
    lng: null,
    location: null,
  },
});
export const useMapboxCoords = () => useRecoilValue(mapboxCoords);
export const useSetCoordsRecoil = () => useRecoilState(mapboxCoords);
export const useSetterCords = () => useSetRecoilState(mapboxCoords);

//// me current report
const reporte = atom({
  key: "reporteObj",
  default: "",
});

export const useGetReport = () => useRecoilValue(reporte);
export const useSetterReport = () => useSetRecoilState(reporte);
export const useSetReport = () => useRecoilState(reporte);
