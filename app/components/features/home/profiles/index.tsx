import { useState } from "react";

import SearchInput from "@/components/common/search-input";
import ProfileCard from "@/components/common/profile-card";
import Button from "@/components/common/button";
import useProfiles from "@/hooks/use-profiles";

import styles from "./profiles.module.scss";
import bg from "@/assets/images/bg-perfiles-homepage.svg";
import aje from "@/assets/images/patrocinadores/logo_grupoaje_blanco.svg";
import lc from "@/assets/images/patrocinadores/logo_laconstancia_blanco.svg";
import pp from "@/assets/images/patrocinadores/logo_presidente_plaza_blanco.png";
import tt from "@/assets/images/patrocinadores/logo_todotransfer_blanco.svg";

export default function Profiles() {
  const profiles = useProfiles(true);
  const [currentProfiles, setCurrentProfiles] = useState(profiles);

  const handleSearchInputChange = (value: string) => {
    setCurrentProfiles(
      profiles.filter(
        (p) => p.name.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
  };

  return (
    <section className={styles.profiles}>
      <img
        src={bg}
        alt="Figuras de background"
        className="absolute top-0 left-0 z-[-1] block h-full w-auto"
      />
      <div className={styles["profiles-container"]}>
        <p className="mb-4 text-justify font-normal lg:text-[1.25rem]">
          Conoce la esencia de PRISMA a través de los portafolios. Creatividad
          que inspira, diseña y transforma.
        </p>
        <SearchInput onChange={handleSearchInputChange} />
        <div className="xl:gridcols4 grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {currentProfiles.slice(0, 12).map((p, i) => (
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
        <Button sx={{ height: "fit-content" }}>Ver portafolios</Button>
      </div>
      <div className={styles.patrocinadores}>
        {PATROCINADORES.map((p) => (
          <img key={p} src={p} alt="Patrocinador" />
        ))}
      </div>
    </section>
  );
}

const PATROCINADORES = [aje, lc, pp, tt];
