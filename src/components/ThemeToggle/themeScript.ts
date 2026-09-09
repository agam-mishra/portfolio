export const themeInitScript = `
(function () {
	try {
		var stored = localStorage.getItem("theme");
		var isDark = stored ? stored === "dark" : true;
		if (isDark) document.documentElement.classList.add("dark");
	} catch (e) {}
})();
`;
