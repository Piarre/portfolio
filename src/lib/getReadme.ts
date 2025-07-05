import { DATA } from "@/data/resume";

export const getReadme = async (): Promise<string> => {
  return await fetch("https://raw.githubusercontent.com/Piarre/Piarre/main/README.md")
    .then(async (res) => await res.text())
    .then((text) => {
      const matches = text.match(/.*https?:\/\/(www\.)?skillicons\.dev\S*.*/g)
        ?.map((match) => {
          return match.replace(/!\[.*?\]\(https:\/\/skillicons\.dev\/icons\?i=/g, "").replace(/&perline=\d+\)/g, "").slice();
        });

      return matches?.join(",") ?? DATA.skills.map(skill => skill.toLowerCase()).join(",");
    })
    .catch((error) => {
      console.error("Error fetching README:", error);
      return "";
    });
};
