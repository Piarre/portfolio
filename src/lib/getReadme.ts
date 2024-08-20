export const getReadme = async () => {
  return await fetch("https://raw.githubusercontent.com/Piarre/Piarre/main/README.md")
    .then((res) => res.text())
    .then((res) => {
      return (
        // prettier-ignore
        new DOMParser()
        .parseFromString(res, "text/html")
        .querySelector('a[href="https://skillicons.dev"] img')
          ?.outerHTML ?? "Element not found"
      );
    })
    .then((x) =>
      x
        .split("icons?i=")[1]
        .split(",")
        .map((x) => x.split("&")[0])
    );
};
