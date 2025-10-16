import { Link } from "react-router";

import type { Profile } from "@/lib/types";
import Button from "../button";
import MainShape from "./main-shape";

import styles from "./profile-card.module.scss";
import CATEGORIES from "@/assets/json/categories.json";
import getPublicImageURL from "@/lib/utils/get-public-image-url";

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className={styles["profile-card"]}>
      <Link to={`/${profile.slug}`} className={styles["images-container"]}>
        <MainShape imageUrl={getPublicImageURL(profile, "trabajo1")} />
        <img
          src={getPublicImageURL(profile, "perfil")}
          alt="profile"
          className={styles["profile-img"]}
        />
      </Link>
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
