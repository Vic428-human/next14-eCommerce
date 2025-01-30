import Image from "next/image";
import variables from "../../styles/variables.module.scss";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <MaxWidthWrapper className={variables.MaxWidthWrapper}>
        <div className={variables.title}>hello!!</div>
      </MaxWidthWrapper>
    </div>
  );
}
