import { useState } from "react";

import SearchInput from "@/components/common/search-input";
import ProfileCard from "@/components/common/profile-card";
import Button from "@/components/common/button";
import useProfiles from "@/hooks/use-profiles";

import styles from "./profiles.module.scss";
import PATROCINADORES_JSON from "@/assets/json/sponsorships.json";
import bg from "@/assets/images/bg-perfiles-homepage.svg";
import aje from "@/assets/images/patrocinadores/logo_grupoaje_blanco.svg";
import lc from "@/assets/images/patrocinadores/logo_laconstancia_blanco.svg";
import pp from "@/assets/images/patrocinadores/logo_presidente_plaza_blanco.png";
import tt from "@/assets/images/patrocinadores/logo_todotransfer_blanco.svg";
import { Link } from "react-router";

export default function Profiles() {
  const [query, setQuery] = useState("");
  const profiles = useProfiles({
    random: true,
    query,
  });

  return (
    <section
      className={styles.profiles}
      style={{
        backgroundImage: `url(${bg}), linear-gradient(199deg,#9e5cfc 5.17%,#6246f8 50%,#a394fd 94.83%)`,
      }}
    >
      <div className={styles["profiles-container"]}>
        <p className="mb-4 text-justify font-normal lg:text-[1.25rem]">
          Conoce la esencia de PRISMA a través de los portafolios. Creatividad
          que inspira, diseña y transforma.
        </p>
        <SearchInput onChange={setQuery} />
        <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {profiles.slice(0, 12).map((p, i) => (
            <ProfileCard key={i} profile={p} />
          ))}
        </div>
      </div>
      <div className={styles["profiles-footer"]}>
        <p className="border-l-[2px] border-solid border-l-white pl-2 text-justify font-normal lg:text-2xl">
          Cada portafolio es un prisma distinto, un reflejo de ideas, estilos y
          visiones que se transforman en diseño. Descubre el talento que da vida
          a MAD 2025.
        </p>
        <Button sx={{ height: "fit-content" }} href="/portafolios">
          Ver portafolios
        </Button>
      </div>
      <div className={styles.patrocinadores}>
        {PATROCINADORES.map((p) => (
          <Link
            to={p.web}
            target="_blank"
            className="flex size-full items-center justify-center"
          >
            <img
              key={p.img}
              src={p.img}
              className={p.className}
              alt="Patrocinador"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

const PATROCINADORES = [
  { img: aje, className: "lg:h-[40%]", web: PATROCINADORES_JSON[0].web },
  { img: pp, className: "lg:h-[60%]", web: PATROCINADORES_JSON[1].web },
  { img: lc, className: "lg:h-[50%]", web: PATROCINADORES_JSON[2].web },
  { img: tt, className: "lg:h-[50%]", web: PATROCINADORES_JSON[3].web },
];
