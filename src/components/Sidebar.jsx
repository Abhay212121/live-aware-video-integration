import { Listitem } from "./Listitem";
import { sidebarData } from "../constants/sidebarConstantData";

export function Sidebar() {
  return (
    <div className="w-[20%] bg-[#C1242B] h-fit py-6 px-4 flex flex-col gap-6 rounded-tr-xl rounded-br-xl mt-20 sticky top-45">
      <p className="text-2xl mb-2 font-head text-black text-center tracking-wide">
        Stronger | Wiser | Happier
      </p>
      {sidebarData.map((item) => {
        return (
          <Listitem
            key={item.title}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        );
      })}
    </div>
  );
}
