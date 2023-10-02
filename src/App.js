import { useState } from "react";
import "./styles.css";
import Stars from "./Stars";

const sections = {
  ALL: "All",
  CORE: "Core Framework",
  PLUGIN: "Plugins",
  OTHER: "Other Packages"
};

const docs = [
  {
    name: "Ape Framework",
    link: "https://docs.apeworx.io/ape/stable/index.html",
    section: sections.CORE
  },
  {
    name: "Silverback",
    link: "https://docs.apeworx.io/silverback/",
    section: sections.CORE
  },
  {
    name: "Starknet",
    link: "https://docs.apeworx.io/ape-starknet/stable/",
    section: sections.PLUGIN
  },
  {
    name: "EIP712",
    link: "https://docs.apeworx.io/eip712/stable/",
    section: sections.OTHER
  }
];

export default function App() {
  const [selectedSection, setSelectedSection] = useState(sections.ALL);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = searchTerm
    ? docs.filter(
        (doc) =>
          doc.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        // || doc.link.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : docs;

  const sectionsWithDocs = Object.values(sections).filter((section) =>
    filteredDocs.some((doc) => doc.section === section)
  );

  return (
    <div className="App">
      <Stars />

      <header>
        <a target="_blank" href="https://www.apeworx.io/">
          <img className="small" src="./ape-logo-8bit.png" />
        </a>
        <img className="big" src="./docs-logo-8bit.png" />
      </header>
      <main>
        <input
          placeholder="Search..."
          type="text"
          onChange={(e) => {
            setSelectedSection(sections.ALL);
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
          autoFocus
        />
        <div className="docs">
          {sectionsWithDocs.map(
            (section) =>
              section !== sections.ALL &&
              (selectedSection === sections.ALL ||
                selectedSection === section) && (
                <>
                  <h2>{section}</h2>
                  <ul>
                    {filteredDocs
                      .filter((doc) => doc.section === section)
                      .map((doc) => (
                        <li key={doc.link}>
                          <a target="_blank" href={doc.link}>
                            {doc.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </>
              )
          )}
        </div>
        <ul className="sections">
          {Object.keys(sections).map((key) => (
            <li
              key={key}
              className={selectedSection === sections[key] && "selected"}
              onClick={() => {
                setSelectedSection(sections[key]);
                setSearchTerm("");
              }}
            >
              {sections[key]}
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <a target="_blank" href="https://www.apeworx.io/">
          <img src="./ape-logo-8bit.png" />
        </a>
      </footer>
    </div>
  );
}
