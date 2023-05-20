import React, { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {

  const preferDarkQuery = "(prefers-color-scheme: dark)"; // ユーザがダークモードを好むかどうか
  const [mode, setMode] = useState("");

  useEffect(() => { // 初期マウント

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const usePref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if(usePref){ // 既存のテーマ設定があれば
        let check = usePref === "dark" ? "dark" : "light";
        setMode(check);
        if(check==="dark"){
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else { // テーマ設定がない場合
        let check = mediaQuery.matches ? "dark" : "light"; // mediaQuery参照
        setMode(check); // modeに格納
        window.localStorage.setItem(
          "theme",
          check
        );
        if(check==="dark"){
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange) // preferDarkQueryに変更があった場合に実行

    return () => mediaQuery.removeEventListener("change", handleChange) // アンマウント時のクリーンアップ

  }, [])

  useEffect(() => { // mode更新時の処理
    if(mode === "dark"){
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark")
    }

    if(mode === "light"){
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark")
    }

  }, [mode])

  return [mode, setMode]

}

export default useThemeSwitcher