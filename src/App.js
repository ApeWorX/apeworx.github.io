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
    name: "Etherscan",
    link: "https://github.com/ApeWorX/ape-etherscan",
    section: sections.PLUGIN
  },
  {
    name: "Safe",
    link: "https://github.com/ApeWorX/ape-safe",
    section: sections.PLUGIN
  },
  {
    name: "ENS",
    link: "https://github.com/ApeWorX/ape-ens",
    section: sections.PLUGIN
  },
  {
    name: "Tenderly",
    link: "https://github.com/ApeWorX/ape-tenderly",
    section: sections.PLUGIN
  },
  {
    name: "Infura",
    link: "https://github.com/ApeWorX/ape-infura",
    section: sections.PLUGIN
  },
  {
    name: "Alchemy",
    link: "https://github.com/ApeWorX/ape-alchemy",
    section: sections.PLUGIN
  },
  {
    name: "Vyper",
    link: "https://github.com/ApeWorX/ape-vyper",
    section: sections.PLUGIN
  },
  {
    name: "Starknet",
    link: "https://docs.apeworx.io/ape-starknet/stable/",
    section: sections.PLUGIN
  },
  {
    name: "Polygon",
    link: "https://github.com/ApeWorX/ape-polygon/",
    section: sections.PLUGIN
  },
  {
    name: "Polygon zkEVM",
    link: "https://github.com/ApeWorX/ape-polygon-zkevm/",
    section: sections.PLUGIN
  },
  {
    name: "Base",
    link: "https://github.com/ApeWorX/ape-base/",
    section: sections.PLUGIN
  },
  {
    name: "Fantom",
    link: "https://github.com/ApeWorX/ape-fantom/",
    section: sections.PLUGIN
  },
  {
    name: "BSC (Binance Smart Chain)",
    link: "https://github.com/ApeWorX/ape-bsc/",
    section: sections.PLUGIN
  },
  {
    name: "Optimism",
    link: "https://github.com/ApeWorX/ape-optimism",
    section: sections.PLUGIN
  },
  {
    name: "Arbitrum",
    link: "https://github.com/ApeWorX/ape-arbitrum",
    section: sections.PLUGIN
  },
  {
    name: "Avalanche",
    link: "https://github.com/ApeWorX/ape-avalanche",
    section: sections.PLUGIN
  },
  {
    name: "Flashbots",
    link: "https://github.com/ApeWorX/ape-flashbots",
    section: sections.PLUGIN
  },
  {
    name: "Ledger",
    link: "https://github.com/ApeWorX/ape-ledger",
    section: sections.PLUGIN
  },
  {
    name: "Trezor",
    link: "https://github.com/ApeWorX/ape-trezor",
    section: sections.PLUGIN
  },
  {
    name: "Frame",
    link: "https://github.com/ApeWorX/ape-frame",
    section: sections.PLUGIN
  },
  {
    name: "Solidity",
    link: "https://github.com/ApeWorX/ape-solidity",
    section: sections.PLUGIN
  },
  {
    name: "Cairo",
    link: "https://github.com/ApeWorX/ape-cairo",
    section: sections.PLUGIN
  },
  {
    name: "Foundry",
    link: "https://github.com/ApeWorX/ape-foundry",
    section: sections.PLUGIN
  },
  {
    name: "Hardhat",
    link: "https://github.com/ApeWorX/ape-hardhat",
    section: sections.PLUGIN
  },
  {
    name: "Ganache",
    link: "https://github.com/ApeWorX/ape-ganache",
    section: sections.PLUGIN
  },
  {
    name: "Jupyter Notebook",
    link: "https://github.com/ApeWorX/ape-notebook",
    section: sections.PLUGIN
  },
  {
    name: "Tokens",
    link: "https://github.com/ApeWorX/ape-tokens",
    section: sections.PLUGIN
  },
  {
    name: "Titanoboa",
    link: "https://github.com/ApeWorX/ape-titanoboa",
    section: sections.PLUGIN
  },
  {
    name: "Address Book",
    link: "https://github.com/ApeWorX/ape-addressbook",
    section: sections.PLUGIN
  },
  {
    name: "AWS KMS",
    link: "https://github.com/ApeWorX/ape-aws-kms",
    section: sections.PLUGIN
  },
  {
    name: "Chainstack",
    link: "https://github.com/ApeWorX/ape-chainstack",
    section: sections.PLUGIN
  },
  {
    name: "Plugin Template",
    link: "https://github.com/ApeWorX/ape-template",
    section: sections.PLUGIN
  },
  {
    name: "EIP712",
    link: "https://docs.apeworx.io/eip712/stable/",
    section: sections.OTHER
  },
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
