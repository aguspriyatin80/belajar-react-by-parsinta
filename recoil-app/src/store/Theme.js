import { atom } from "recoil";

const theme = atom({
    key: "my-theme",
    default: "dark"
});

export { theme };