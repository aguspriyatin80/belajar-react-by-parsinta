import { useRecoilValue } from "recoil";
import { User } from "./store/User";


export default function Home() {
    const { user } = useRecoilValue(User);
    return <div>{user.name}</div>;
}