import type { Profile } from "@/lib/types";
import Button from "../button";
import MainShape from "./main-shape";

import styles from "./profile-card.module.scss";
import CATEGORIES from "@/assets/json/categories.json";

export default function ProfileCard({ profile }: ProfileCardProps) {
  const mainArea = profile.areas[0];
  const imagesName = `${profile.slug.replaceAll("-", "_")}`;

  return (
    <div className={styles["profile-card"]}>
      <div className={styles["images-container"]}>
        <MainShape
          imageUrl={`/images/mockups/mockup1/${imagesName}_trabajo1.webp`}
        />
        <img
          src={`/images/perfiles/${mainArea}/${imagesName}_perfil.webp`}
          alt="profile"
          className={styles["profile-img"]}
        />
      </div>
      <div className="px-3">
        <h3 className="text-4xl font-bold md:text-3xl">{profile.name}</h3>
        <h5 className="mb-2 text-2xl md:text-xl">
          {CATEGORIES[profile.areas[0]]}
        </h5>
        <div className="grid grid-cols-2 gap-4">
          <Button href={profile.flipbook} target="_blank">
            Portafolio
          </Button>
          <Button variant="purple" href={`/${profile.slug}`}>
            Perfil
          </Button>
        </div>
      </div>
    </div>
  );
}

type ProfileCardProps = {
  profile: Profile;
};
