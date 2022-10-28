import pizza from "../assets/pizza.png";
import Github from "./Icons/Github";

function Footer() {
  return (
    <div className="mt-auto mx-auto w-[70%] p-4 border-t-2 border-gray-500 ">
      <div className="max-w-4xl flex items-center justify-between m-auto">
        <div className="w-[80px]">
          <img width={"80px"} src={pizza} alt="Pizza logo" />
          <p className="text-[14px] font-bold">Pizza Inc.</p>
        </div>
        <div className="items-center">
          <a
            href="https://github.com/AllegriM/IDforIDEAS"
            target={"_blank"}
            rel="noreferrer"
            className="flex flex-col items-center mb-2"
          >
            <Github />
          </a>
          Check our project!
        </div>
      </div>
    </div>
  );
}

export default Footer;
