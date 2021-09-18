import { useRecoilState, useRecoilValue } from "recoil";
import { theme } from "./store/Theme";
import { User } from "./store/User";


export default function Home() {
    const { user } = useRecoilValue(User);
    const [currentTheme, setCurrentTheme] = useRecoilState(theme);
    const defaultTheme = currentTheme == "dark" ? "bg-dark text-light" : "bg-light text-dark";
    const handleChange = (e) => {
        setCurrentTheme(e.target.value);
    };
    return (
        <div className={`${defaultTheme}`}>
            <div>
                {user.name}
            </div>
            <div>
                <select onChange={handleChange}>
                    <option>Please choose</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </div>
        </div>
    )
}