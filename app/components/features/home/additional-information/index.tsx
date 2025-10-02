import SocialNetworkButton from "@/components/common/social-network-button";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import LocationIcon from "@/components/icons/location";
import TiktokIcon from "@/components/icons/tiktok";

export default function AdditionalInformation() {
  return (
    <div className="m-auto mt-5 flex w-fit items-center justify-center text-white max-xl:flex-col max-xl:gap-3 xl:mt-10">
      <div className="flex items-center gap-2 border-b-2 border-solid border-b-white max-xl:justify-center max-xl:pb-2 max-lg:justify-between xl:border-r-[4px] xl:border-r-white xl:pr-10">
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
      <div className="flex w-full max-xl:justify-between max-lg:px-1.5 xl:gap-3 xl:pl-10">
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
