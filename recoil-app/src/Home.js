import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from "recoil";
import { theme } from "./store/Theme";
import { User } from "./store/User";
import $ from 'jquery';

export default function Home() {
    const { user } = useRecoilValue(User);
    const [currentTheme, setCurrentTheme] = useRecoilState(theme);
    const defaultTheme = currentTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    const handleChange = (e) => {
        e.preventDefault()
        setCurrentTheme(e.target.value);
    };

    useEffect(() => {
        $(function () {
            if (localStorage.getItem('options')) {
                $("#options option").eq(localStorage.getItem('options')).prop('selected', true);
            }

            $("#options").on('change', function () {
                localStorage.setItem('options', $('option:selected', this).index());
            });

        });
        // INI KODE ALTERNATIVE
        // $("#options").on("change", function () {
        //     var val = $(this).val();
        //     // save to local
        //     if (window.localStorage) {
        //         window.localStorage.setItem("#options-val", val);
        //     }
        // });

        // if (window.localStorage) {
        //     var item = window.localStorage.getItem("#options-val");
        //     if (item) $("#options").val(item);
        // }

    }, [])

    return (
        <div className={`${defaultTheme}`}>
            <div>
                {user.name}
            </div>
            <div>
                <select onChange={handleChange} id="options">

                    <option id="dark" value="dark">Dark</option>
                    <option id="light" value="light">Light</option>
                </select>
            </div>

        </div>




    )

}
