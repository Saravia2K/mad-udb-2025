import SocialNetworkButton from "@/components/common/social-network-button";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import LocationIcon from "@/components/icons/location";
import TiktokIcon from "@/components/icons/tiktok";

import styles from "./mad-location-social-networks.module.scss";

export default function MadLocationSocialNetworks() {
  return (
    <div className={styles["mad-location-social-networks"]}>
      <div className={styles["location-container"]}>
        <SocialNetworkButton
          icon={<LocationIcon />}
          href="https://maps.app.goo.gl/oSj8djKsvYvHtuj89"
        />
        <div className="flex flex-col font-[Creato_Display] text-xl">
          <span className="font-bold tracking-wider">Presidente</span>
          <span className="mt-[-7.5px] font-light tracking-wider">Plaza</span>
        </div>
      </div>
      <div className={styles["social-networks"]}>
        <SocialNetworkButton
          icon={<InstagramIcon />}
          href="https://www.instagram.com/portafoliodg.udb?igsh=MThvamZiNXRoejVlbg=="
        />
        <SocialNetworkButton
          icon={<FacebookIcon />}
          href="https://www.facebook.com/share/17CHiE4NwX/"
        />
        <SocialNetworkButton
          icon={<TiktokIcon />}
          href="https://vm.tiktok.com/ZMHWnh9MNDFfT-fZJC1/"
        />
      </div>
    </div>
  );
}
