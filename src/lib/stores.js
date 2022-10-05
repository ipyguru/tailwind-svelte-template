import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const darkMode = writable(
    browser && (localStorage.getItem("darkMode") || false))
    ;
    darkMode.subscribe((val) => browser && localStorage.setItem("darkMode", val));