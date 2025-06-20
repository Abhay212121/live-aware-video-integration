import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="py-6 bg-[#C1242B]">
      <p
        onClick={() => navigate("/")}
        className="font-cursive cursor-pointer text-5xl text-center text-[#F4F4FF]"
      >
        Live Aware
      </p>
    </div>
  );
}
