import PlainLayout from "@/components/layouts/PlainLayout";
import { Children } from "@/types/common.next";

export default function Layout({ children }: Children) {
  return (
    <PlainLayout>
      <div className="bg-[url('/images/mash.png')] h-screen bg-no-repeat bg-right-top">
        {children}
      </div>
    </PlainLayout>
  );
}
