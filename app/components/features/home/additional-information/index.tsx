import SocialNetworkButton from "@/components/common/social-network-button";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import LocationIcon from "@/components/icons/location";
import TiktokIcon from "@/components/icons/tiktok";

export default function AdditionalInformation() {
  return (
    <div className="mt-10 flex justify-center text-white">
      <div className="flex items-center gap-4 border-r-[4px] border-solid border-r-white pr-10">
        <SocialNetworkButton
          icon={<LocationIcon />}
          href="https://maps.app.goo.gl/oSj8djKsvYvHtuj89"
        />
        <div className="flex flex-col font-[Creato_Display] text-xl">
          <span className="font-light">Plaza</span>
          <span className="mt-[-7.5px] font-bold tracking-wider">
            Presidente
          </span>
        </div>
      </div>
      <div className="flex gap-3 pl-10">
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
